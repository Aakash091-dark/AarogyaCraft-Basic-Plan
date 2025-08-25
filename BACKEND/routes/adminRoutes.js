const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Staff routes
router.post('/staff', adminController.addStaff);
router.get('/staff', adminController.listStaff);
router.put('/staff/:id', adminController.updateStaff);
router.delete('/staff/:id', adminController.deleteStaff);

// Report routes
router.get('/reports', adminController.listReports);
router.put('/reports/:id', adminController.updateReport);
router.delete('/reports/:id', adminController.deleteReport);

module.exports = router;
