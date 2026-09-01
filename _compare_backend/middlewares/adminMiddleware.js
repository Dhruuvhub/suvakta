export const requireAdmin = (req, res, next) => {
    // If the user object doesn't exist or their role isn't admin, kick them out
    if (!req.user || req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Forbidden: You do not have Admin privileges' });
    }
    
    // If they are an admin, let them pass!
    next();
  };