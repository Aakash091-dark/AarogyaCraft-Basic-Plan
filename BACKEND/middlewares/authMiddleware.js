// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");
const JWT_SECRET = "your_jwt_secret";

function authMiddleware(requiredRole) {
  return (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) return res.status(401).json({ msg: "No token, authorization denied" });

    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      if (requiredRole && decoded.role !== requiredRole) {
        return res.status(403).json({ msg: "Access denied" });
      }
      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).json({ msg: "Invalid token" });
    }
  };
}

module.exports = authMiddleware;
