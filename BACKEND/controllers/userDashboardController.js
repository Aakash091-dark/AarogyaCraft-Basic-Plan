const pool = require("../db/connection");
const reportModel = require("../models/report");

// Get user (patient) profile
const getUserProfile = async (userId) => {
  const result = await pool.query(
    `SELECT id, name, email 
     FROM patients WHERE id = $1`,
    [userId]
  );
  return result.rows[0];
};

// ✅ Get all reports of a user
const getUserReports = async (userId) => {
    return await reportModel.getAllReportsByUserId(userId);
};

// ✅ Get all appointments of a user
// const getUserAppointments = async (userId) => {
//   const result = await pool.query(
//     `SELECT * FROM appointments WHERE patient_id = $1 ORDER BY appointment_date DESC`,
//     [userId]
//   );
//   return result.rows;
// };

// ✅ Get all past medical history/details
// const getUserHistory = async (userId) => {
//   const result = await pool.query(
//     `SELECT * FROM medical_history WHERE patient_id = $1 ORDER BY visit_date DESC`,
//     [userId]
//   );
//   return result.rows;
// };

module.exports = {
  getUserProfile,
  getUserReports,
};
