const departmentModel = require('../models/department');

const addDepartment = async (req, res) => {
  try {
    const dept = await departmentModel.createDepartment(req.body);
    res.status(201).json(dept);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const listDepartments = async (req, res) => {
  try {
    const depts = await departmentModel.getAllDepartments();
    res.json(depts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateDepartment = async (req, res) => {
  try {
    const dept = await departmentModel.updateDepartment(req.params.id, req.body);
    res.json(dept);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteDepartment = async (req, res) => {
  try {
    const result = await departmentModel.deleteDepartment(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addDepartment, listDepartments, updateDepartment, deleteDepartment };
