import { supabase } from '../config/supabase.js';

export const requireAuth = async (req, res, next) => {
  try {
    // 1. Grab the token from the request headers
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Unauthorized: Missing or invalid token' });
    }

    const token = authHeader.split(' ')[1];

    // 2. Ask Supabase to cryptographically verify the token
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return res.status(401).json({ error: 'Unauthorized: Expired or invalid token' });
    }

    // 3. Fetch the user's custom details (like their role) from our profiles table
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    if (profileError || !profile) {
      return res.status(401).json({ error: 'Unauthorized: User profile not found' });
    }

    // 4. Attach the profile to the request so the next function can use it
    req.user = profile;
    
    // 5. Let the user pass to the actual route!
    next(); 
  } catch (err) {
    res.status(500).json({ error: 'Internal server error during authentication' });
  }
};