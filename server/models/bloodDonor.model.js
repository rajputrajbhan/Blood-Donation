  const mongoose = require('mongoose');
  const bcrypt = require('bcrypt');

  const donationHistorySchema = new mongoose.Schema({
    donationDate: {
      type: Date,
      required: true
    },
    bloodBank: {
      type: String,
      required: true
    },
    units: {
      type: Number,
      required: true,
      default: 1
    },
    notes: String
  });

  const bloodDonorSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [/^\d{10}$/, 'Phone number must be 10 digits']
    },
    role: {
      type: String,
      enum: ['Donor']
    },
    age: {
      type: Number,
      required: true,
      min: 18,
      max: 65
    },
    weight: {
      type: Number,
      required: true,
      min: [50, 'Weight must be at least 50kg to donate blood']
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
      required: true
    },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      required: true
    },
    photo: {
      url: String,
      publicId: String
    },
    medicalHistory: {
      type: String,
      default: 'No major issues'
    },
    address: {
      state: String,
      city: String,
      street: String,
      zipCode: {
        type: String,
        match: [/^\d{6}$/, 'ZIP code should be 6 digits']
      }
    },
    donationHistory: [donationHistorySchema],
    lastDonationDate: {
      type: Date
    },
    totalDonations: {
      type: Number,
      default: 0
    },
    isEligibleToDonate: {
      type: Boolean,
      default: true
    },
    nextEligibleDate: {
      type: Date
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

  // Pre-save middleware to update donation-related fields
  bloodDonorSchema.pre('save', function(next) {
    if (this.donationHistory && this.donationHistory.length > 0) {
      // Update last donation date
      this.lastDonationDate = this.donationHistory[this.donationHistory.length - 1].donationDate;

      // Update total donations
      this.totalDonations = this.donationHistory.length;

      // Calculate next eligible date (3 months from last donation)
      this.nextEligibleDate = new Date(this.lastDonationDate);
      this.nextEligibleDate.setMonth(this.nextEligibleDate.getMonth() + 3);

      // Update eligibility status
      this.isEligibleToDonate = new Date() >= this.nextEligibleDate;
    }
    next();
  });

  module.exports = mongoose.model('Donor ', bloodDonorSchema); 
