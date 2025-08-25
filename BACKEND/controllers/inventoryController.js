const inventoryModel = require('../models/inventory');

const addInventory = async (req, res) => {
  try {
    const item = await inventoryModel.createInventory(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const listInventory = async (req, res) => {
  try {
    const items = await inventoryModel.getAllInventory();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateInventory = async (req, res) => {
  try {
    const item = await inventoryModel.updateInventory(req.params.id, req.body);
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteInventory = async (req, res) => {
  try {
    const result = await inventoryModel.deleteInventory(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addInventory, listInventory, updateInventory, deleteInventory };
