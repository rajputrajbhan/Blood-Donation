const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient.controller');
const upload = require('../middleware/upload.middleware');

// Create uploads directory if it doesn't exist
const fs = require('fs');
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Get all patients
router.get('/', patientController.getAllPatients);

// Get single patient
router.get('/:id', patientController.getPatientById);

// Create new patient with photo
router.post('/', upload.single('photo'), patientController.createPatient);

// Update patient with photo
router.put('/:id', upload.single('photo'), patientController.updatePatient);

// Delete patient
router.delete('/:id', patientController.deletePatient);

module.exports = router; 