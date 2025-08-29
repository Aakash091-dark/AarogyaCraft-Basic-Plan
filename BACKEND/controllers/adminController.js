const staffModel = require('../models/staff');
const reportModel = require('../models/report');

// Staff management
const addStaff = async (req, res) => {
  try {
    const staff = await staffModel.createStaff(req.body);
    res.status(201).json(staff);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const listStaff = async (req, res) => {
  try {
    const staff = await staffModel.getAllStaff();
    res.json(staff);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateStaff = async (req, res) => {
  try {
    const staff = await staffModel.updateStaff(req.params.id, req.body);
    res.json(staff);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteStaff = async (req, res) => {
  try {
    const result = await staffModel.deleteStaff(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Report management
const listReports = async (req, res) => {
  try {
    const reports = await reportModel.getAllReports();
    res.json(reports);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createReport = async (req, res) => {
  try {
    const report = await reportModel.createReport(req.body);
    res.json(report);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};




const updateReport = async (req, res) => {
  try {
    const report = await reportModel.updateReport(req.params.id, req.body);
    res.json(report);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteReport = async (req, res) => {
  try {
    const result = await reportModel.deleteReport(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addStaff,
  listStaff,
  updateStaff,
  deleteStaff,
  listReports,
  createReport,
  updateReport,
  deleteReport,
};
