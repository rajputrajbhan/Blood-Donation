const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB  = require('./config/db.config');
const bodyParser = require('body-parser');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies with increased limit
app.use(express.json({ limit: '50mb' }));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Database connection
connectDB();

// Routes
const patientRoutes = require('./routes/patient.routes');
// const bloodDonorRoutes = require('./routes/bloodDonor.routes');
const authRoutes = require('./routes/auth.routes');

// Register routes
app.use('/api/patients', patientRoutes);
// app.use('/api/donors', bloodDonorRoutes);
app.use('/api/auth', authRoutes);

// Test route
app.get('/', (req, res) => {
    res.json({ message: 'Server is running successfully!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!',
        error: err.message
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
