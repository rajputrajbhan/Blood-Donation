// src/services/authService.js
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5001/api' });

export const sendOTP = (email) => API.post('/auth/send-otp', { email });
export const resendOTP = (email) => API.post('/auth/resend-otp', { email });
export const registerDonor = (data) => API.post('/auth/register/donor', data);
export const login = (data) => API.post('/auth/login', data);
export const forgotPassword = (email, role) => API.post('/auth/forgot-password', { email, role });
