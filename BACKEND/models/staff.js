const pool = require('../db/connection');

const createStaff = async (staff) => {
  const { name, role, department, email, phone } = staff;
  const result = await pool.query(
    `INSERT INTO staff (name, role, department, email, phone) 
     VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [name, role, department, email, phone]
  );
  return result.rows[0];
};

const getAllStaff = async () => {
  const result = await pool.query(`SELECT * FROM staff`);
  return result.rows;
};

const getStaffById = async (id) => {
  const result = await pool.query(`SELECT * FROM staff WHERE id = $1`, [id]);
  return result.rows[0];
};

const updateStaff = async (id, staff) => {
  const { name, role, department, email, phone } = staff;
  const result = await pool.query(
    `UPDATE staff SET name=$1, role=$2, department=$3, email=$4, phone=$5 WHERE id=$6 RETURNING *`,
    [name, role, department, email, phone, id]
  );
  return result.rows[0];
};

const deleteStaff = async (id) => {
  await pool.query(`DELETE FROM staff WHERE id=$1`, [id]);
  return { message: 'Staff deleted successfully' };
};

module.exports = { createStaff, getAllStaff, getStaffById, updateStaff, deleteStaff };
