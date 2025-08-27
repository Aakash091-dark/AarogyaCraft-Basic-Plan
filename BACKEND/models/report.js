const pool = require('../db/connection');

const createReport = async (report) => {
  const { patient_id, title, content } = report;
  const result = await pool.query(
    `INSERT INTO reports (patient_id, title, content) VALUES ($1,$2,$3) RETURNING *`,
    [patient_id, title, content]
  );
  return result.rows[0];
};

const getAllReports = async () => {
  const result = await pool.query(`SELECT * FROM reports`);
  return result.rows;
};

// Get all reports of a specific user (patient)
const getAllReportsByUserId = async (patient_id) => {
  const result = await pool.query(
    `SELECT * FROM reports WHERE patient_id = $1 ORDER BY created_at DESC`,
    [patient_id]
  );
  return result.rows;
};

const updateReport = async (id, report) => {
  const { title, content } = report;
  const result = await pool.query(
    `UPDATE reports SET title=$1, content=$2 WHERE id=$3 RETURNING *`,
    [title, content, id]
  );
  return result.rows[0];
};

const deleteReport = async (id) => {
  await pool.query(`DELETE FROM reports WHERE id=$1`, [id]);
  return { message: 'Report deleted successfully' };
};

module.exports = { createReport, getAllReports, updateReport, deleteReport };
