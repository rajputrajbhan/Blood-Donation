const cloudinary = require('../config/cloudinary.config');
const fs = require('fs');

// Upload image to Cloudinary with folder specification
const uploadToCloudinary = async (filePath, folder = 'general') => {
    try {
        const result = await cloudinary.uploader.upload(filePath, {
            folder: folder,
            use_filename: true
        });

        // Remove file from local storage
        fs.unlinkSync(filePath);

        return {
            url: result.secure_url,
            publicId: result.public_id
        };
    } catch (error) {
        // Remove file from local storage in case of error
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
        throw error;
    }
};

// Upload donor photo
const uploadDonorPhoto = async (filePath) => {
    return await uploadToCloudinary(filePath, 'blood-donors');
};

// Upload patient photo
const uploadPatientPhoto = async (filePath) => {
    return await uploadToCloudinary(filePath, 'patients');
};

// Delete image from Cloudinary
const deleteFromCloudinary = async (publicId) => {
    try {
        if (publicId) {
            await cloudinary.uploader.destroy(publicId);
        }
    } catch (error) {
        console.error('Error deleting image from Cloudinary:', error);
        throw error;
    }
};

module.exports = {
    uploadToCloudinary,
    uploadDonorPhoto,
    uploadPatientPhoto,
    deleteFromCloudinary
}; 