import { supabase } from '../config/supabase.js';

export const getLeaderboard = async (req, res) => {
  try {
    // 1. Fetch all users who are strictly club members
    const { data: members, error: membersError } = await supabase
      .from('profiles')
      .select('id, full_name, college, department, year')
      .eq('role', 'member');

    if (membersError) throw membersError;

    // 2. Fetch ALL approved delegations across the whole club
    const { data: delegations, error: delError } = await supabase
      .from('delegations')
      .select('user_id, points')
      .eq('status', 'approved');

    if (delError) throw delError;

    // 3. Calculate scores for everyone (even those with 0 delegations)
    const leaderboard = members.map((member) => {
      // Find all approved delegations that belong to this specific member
      const memberDelegations = delegations.filter(d => d.user_id === member.id);
      
      // Sum up the points from those delegations
      const totalPoints = memberDelegations.reduce((sum, d) => sum + (d.points || 0), 0);
      
      return {
        id: member.id,
        name: member.full_name,
        college: member.college,
        department: member.department,
        year: member.year,
        totalPoints,
        totalDelegationsAttended: memberDelegations.length
      };
    });

    // 4. Sort the list from highest points to lowest
    leaderboard.sort((a, b) => b.totalPoints - a.totalPoints);

    return res.status(200).json({ leaderboard });
  } catch (err) {
    return res.status(500).json({ error: 'Server error while calculating leaderboard' });
  }
};