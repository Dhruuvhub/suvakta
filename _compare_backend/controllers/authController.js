import { supabase } from '../config/supabase.js';

// 1. ADMIN ONLY: Create a new Member / Admin account
export const createMember = async (req, res) => {
  try {
    const { email, password, full_name, role, department, year } = req.body;

    // Basic validation
    if (!email || !password || !full_name) {
      return res.status(400).json({ error: 'Please provide email, password, and full name' });
    }

    // Step A: Create the user in Supabase Auth via Admin API
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true, // auto-confirms email so they can log in immediately
      user_metadata: { full_name }
    });

    if (authError) {
      return res.status(400).json({ error: authError.message });
    }

    const userId = authData.user.id;

    // Step B: Insert the user's custom details into the public.profiles table
    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .insert([
        {
          id: userId,
          full_name,
          email,
          role: role || 'member', // defaults to 'member' unless 'admin' is specified
          college: 'Miranda House',
          department: department || '',
          year: year || '',
        }
      ])
      .select()
      .single();

    if (profileError) {
      // Cleanup: delete the auth user if profile creation fails
      await supabase.auth.admin.deleteUser(userId);
      return res.status(500).json({ error: profileError.message });
    }

    return res.status(201).json({
      message: 'User created successfully',
      user: profileData
    });
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error while creating user' });
  }
};

// 2. PUBLIC: Login for Members and Admins
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Authenticate with Supabase Auth
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Fetch the user's profile to return their role and details
    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', data.user.id)
      .single();

    return res.status(200).json({
      message: 'Login successful',
      token: data.session.access_token,
      user: profile
    });
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error during login' });
  }
};

// 3. PROTECTED: Get current logged-in user profile
export const getMyProfile = async (req, res) => {
  // req.user is already populated by requireAuth middleware
  return res.status(200).json({ user: req.user });
};