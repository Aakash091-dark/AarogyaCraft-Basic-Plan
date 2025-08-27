const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const adminRoutes = require('./routes/adminRoutes');
const patientRoutes = require('./routes/patientRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Existing routes
app.use("/auth", authRoutes);            // login/register
app.use("/user", userRoutes); 
app.use('/admin', adminRoutes);

// New routes
app.use('/patients', patientRoutes);
app.use('/departments', departmentRoutes);
app.use('/inventory', inventoryRoutes);
app.use('/dashboard', dashboardRoutes);

// Home route
app.get("/", (req, res) => {
  res.send("Home Route!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
