import { supabase } from '../config/supabase.js';

// 1. Fetch Team Members (Core & Secretariat)
export const getTeam = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .order('display_order', { ascending: true }); // Keeps leaders at the top

    if (error) throw error;
    return res.status(200).json({ data });
  } catch (err) {
    return res.status(500).json({ error: 'Server error fetching team members' });
  }
};

// 2. Fetch Public Resources (Brochures, Public Guides)
export const getPublicResources = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('resources')
      .select('id, title, description, category, file_url')
      .eq('is_public', true); // Only fetches resources meant for everyone

    if (error) throw error;
    return res.status(200).json({ data });
  } catch (err) {
    return res.status(500).json({ error: 'Server error fetching public resources' });
  }
};