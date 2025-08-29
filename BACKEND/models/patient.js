const pool = require('../db/connection');

const createPatient = async (patient) => {
  const { name, age, sex, dob, blood_group, mobile, address, email } = patient;
  const result = await pool.query(
    `INSERT INTO patients (name, age, sex, dob, blood_group, mobile, address, email)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`,
    [name, age, sex, dob, blood_group, mobile, address, email]
  );
  return result.rows[0];
};

const getAllPatients = async () => {
  const result = await pool.query(`SELECT * FROM patients`);
  return result.rows;
};

const getPatientById = async (id) => {
  const result = await pool.query(`SELECT * FROM patients WHERE id=$1`, [id]);
  return result.rows[0];
};

const updatePatient = async (id, patient) => {
  const { name, age, sex, dob, blood_group, mobile, address, email } = patient;
  const result = await pool.query(
    `UPDATE patients SET name=$1, age=$2, sex=$3, dob=$4, blood_group=$5, mobile=$6, address=$7, email=$8
     WHERE id=$9 RETURNING *`,
    [name, age, sex, dob, blood_group, mobile, address, email, id]
  );
  return result.rows[0];
};

const deletePatient = async (id) => {
  await pool.query(`DELETE FROM patients WHERE id=$1`, [id]);
  return { message: 'Patient deleted successfully' };
};

module.exports = { createPatient, getAllPatients, getPatientById, updatePatient, deletePatient };
