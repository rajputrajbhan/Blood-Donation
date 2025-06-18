const Patient = require('../models/patient.model');
const { uploadPatientPhoto, deleteFromCloudinary } = require('../utils/cloudinary.utils');

// Get all patients
exports.getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get single patient
exports.getPatientById = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (patient) {
            res.json(patient);
        } else {
            res.status(404).json({ message: 'Patient not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create patient with photo
exports.createPatient = async (req, res) => {
    try {
        let photoData = {};
        if (req.file) {
            photoData = await uploadPatientPhoto(req.file.path);
        }

        const patient = new Patient({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            age: req.body.age,
            gender: req.body.gender,
            bloodGroup: req.body.bloodGroup,
            medicalHistory: req.body.medicalHistory,
            address: req.body.address,
            photo: photoData
        });

        const newPatient = await patient.save();
        res.status(201).json(newPatient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update patient with photo
exports.updatePatient = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        if (req.file) {
            // Delete old photo if exists
            if (patient.photo && patient.photo.publicId) {
                await deleteFromCloudinary(patient.photo.publicId);
            }
            // Upload new photo
            const photoData = await uploadPatientPhoto(req.file.path);
            req.body.photo = photoData;
        }

        Object.assign(patient, req.body);
        const updatedPatient = await patient.save();
        res.json(updatedPatient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete patient
exports.deletePatient = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        // Delete photo from Cloudinary if exists
        if (patient.photo && patient.photo.publicId) {
            await deleteFromCloudinary(patient.photo.publicId);
        }

        await patient.deleteOne();
        res.json({ message: 'Patient deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; 