const pool = require('../db/connection');

const createDepartment = async (department) => {
  const { name, head } = department;
  const result = await pool.query(
    `INSERT INTO departments (name, head) VALUES ($1,$2) RETURNING *`,
    [name, head]
  );
  return result.rows[0];
};

const getAllDepartments = async () => {
  const result = await pool.query(`SELECT * FROM departments`);
  return result.rows;
};

const updateDepartment = async (id, department) => {
  const { name, head } = department;
  const result = await pool.query(
    `UPDATE departments SET name=$1, head=$2 WHERE id=$3 RETURNING *`,
    [name, head, id]
  );
  return result.rows[0];
};

const deleteDepartment = async (id) => {
  await pool.query(`DELETE FROM departments WHERE id=$1`, [id]);
  return { message: 'Department deleted successfully' };
};

module.exports = { createDepartment, getAllDepartments, updateDepartment, deleteDepartment };
