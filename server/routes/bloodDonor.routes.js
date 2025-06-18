// const express = require('express');
// const router = express.Router();
// const bloodDonorController = require('../controllers/bloodDonor.controller');
// const { verifyToken } = require('../middleware/auth.middleware');
// const multer = require('multer');
// const path = require('path');

// // Create uploads directory if it doesn't exist
// const fs = require('fs');
// const uploadDir = 'uploads';
// if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir);
// }

// // Configure multer for file uploads
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });

// const upload = multer({ storage: storage });

// // Middleware to handle both JSON and form data
// router.use(express.json());
// router.use(express.urlencoded({ extended: true }));

// // Donor signup routes
// router.post('/signup', upload.none(), bloodDonorController.startDonorSignup); // Start signup and send OTP
// router.post('/verify-otp', upload.none(), bloodDonorController.verifyDonorSignup); // Verify OTP
// router.post('/complete-signup', upload.single('photo'), bloodDonorController.completeDonorSignup); // Complete signup with photo

// // Protected routes
// router.get('/profile', verifyToken, bloodDonorController.getDonorProfile);
// router.put('/profile', verifyToken, upload.single('photo'), bloodDonorController.updateDonorProfile);
// router.get('/donations', verifyToken, bloodDonorController.getDonorDonations);

// module.exports = router; 