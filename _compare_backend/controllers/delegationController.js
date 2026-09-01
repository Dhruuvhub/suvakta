import { supabase } from '../config/supabase.js';

// 1. MEMBER: Submit a new delegation entry
export const submitDelegation = async (req, res) => {
  try {
    // req.user was securely attached by our authMiddleware
    const userId = req.user.id; 
    const { mun_name, host_college, delegation_type, awards_won, certificate_url } = req.body;

    if (!mun_name || !host_college || !delegation_type) {
      return res.status(400).json({ error: 'Missing required event details' });
    }

    const { data, error } = await supabase
      .from('delegations')
      .insert([{
        user_id: userId,
        mun_name,
        host_college,
        delegation_type,
        awards_won: awards_won || 'None',
        certificate_url: certificate_url || null,
        status: 'pending', // Everything defaults to pending
        points: 0 
      }])
      .select()
      .single();

    if (error) throw error;

    return res.status(201).json({ 
      message: 'Delegation submitted successfully. Pending admin approval.', 
      data 
    });
  } catch (err) {
    return res.status(500).json({ error: 'Server error while submitting delegation' });
  }
};

// 2. ADMIN: Fetch all pending submissions across the club
export const getPendingDelegations = async (req, res) => {
  try {
    // We join the profiles table to easily see who submitted the entry
    const { data, error } = await supabase
      .from('delegations')
      .select('*, profiles(full_name, email)') 
      .eq('status', 'pending');

    if (error) throw error;

    return res.status(200).json({ data });
  } catch (err) {
    return res.status(500).json({ error: 'Server error fetching pending delegations' });
  }
};

// 3. ADMIN: Approve or reject an entry and assign points
export const verifyDelegation = async (req, res) => {
  try {
    const { id } = req.params; // The ID of the delegation being reviewed
    const { status, points } = req.body; 

    if (!['approved', 'rejected'].includes(status)) {
      return res.status(400).json({ error: 'Status must be approved or rejected' });
    }

    const { data, error } = await supabase
      .from('delegations')
      .update({ status, points: points || 0 })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    return res.status(200).json({ message: `Delegation marked as ${status}`, data });
  } catch (err) {
    return res.status(500).json({ error: 'Server error during verification' });
  }
};

// 4. MEMBER: See their own past submissions
export const getMyDelegations = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('delegations')
      .select('*')
      .eq('user_id', req.user.id); // Only fetch the logged-in user's records

    if (error) throw error;

    return res.status(200).json({ data });
  } catch (err) {
    return res.status(500).json({ error: 'Server error fetching your records' });
  }
};