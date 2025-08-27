const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

// Get logged-in user profile
router.get("/profile", authMiddleware("user"), async (req, res) => {
  try {
    const profile = await userController.getUserProfile(req.user.id);
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all reports of logged-in user
router.get("/reports", authMiddleware("user"), async (req, res) => {
  try {
    const reports = await userController.getUserReports(req.user.id);
    res.json(reports);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all appointments of logged-in user
// router.get("/appointments", authMiddleware("user"), async (req, res) => {
//   try {
//     const appointments = await userController.getUserAppointments(req.user.id);
//     res.json(appointments);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// Get medical history of logged-in user
// router.get("/history", authMiddleware("user"), async (req, res) => {
//   try {
//     const history = await userController.getUserHistory(req.user.id);
//     res.json(history);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

module.exports = router;
