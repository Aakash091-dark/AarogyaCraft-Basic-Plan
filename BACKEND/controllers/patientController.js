const patientModel = require('../models/patient');

const addPatient = async (req, res) => {
  try {
    const patient = await patientModel.createPatient(req.body);
    res.status(201).json(patient);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const listPatients = async (req, res) => {
  try {
    const patients = await patientModel.getAllPatients();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getPatient = async (req, res) => {
  try {
    const patient = await patientModel.getPatientById(req.params.id);
    res.json(patient);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updatePatient = async (req, res) => {
  try {
    const patient = await patientModel.updatePatient(req.params.id, req.body);
    res.json(patient);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deletePatient = async (req, res) => {
  try {
    const result = await patientModel.deletePatient(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addPatient, listPatients, getPatient, updatePatient, deletePatient };
