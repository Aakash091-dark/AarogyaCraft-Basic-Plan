const pool = require('../db/connection');

const getStats = async (req, res) => {
  try {
    const staff = await pool.query('SELECT COUNT(*) FROM staff');
    const patients = await pool.query('SELECT COUNT(*) FROM patients');
    const reports = await pool.query('SELECT COUNT(*) FROM reports');
    const departments = await pool.query('SELECT COUNT(*) FROM departments');

    res.json({
      totalStaff: staff.rows[0].count,
      totalPatients: patients.rows[0].count,
      totalReports: reports.rows[0].count,
      totalDepartments: departments.rows[0].count,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getStats };
