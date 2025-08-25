const pool = require('../db/connection');

const createInventory = async (item) => {
  const { name, quantity, department } = item;
  const result = await pool.query(
    `INSERT INTO inventory (name, quantity, department) VALUES ($1,$2,$3) RETURNING *`,
    [name, quantity, department]
  );
  return result.rows[0];
};

const getAllInventory = async () => {
  const result = await pool.query(`SELECT * FROM inventory`);
  return result.rows;
};

const updateInventory = async (id, item) => {
  const { name, quantity, department } = item;
  const result = await pool.query(
    `UPDATE inventory SET name=$1, quantity=$2, department=$3 WHERE id=$4 RETURNING *`,
    [name, quantity, department, id]
  );
  return result.rows[0];
};

const deleteInventory = async (id) => {
  await pool.query(`DELETE FROM inventory WHERE id=$1`, [id]);
  return { message: 'Inventory item deleted successfully' };
};

module.exports = { createInventory, getAllInventory, updateInventory, deleteInventory };
