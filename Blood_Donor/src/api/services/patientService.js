// import api from '../config';

// export const patientService = {
//     // Get all patients
//     getAllPatients: async () => {
//         const response = await api.get('/patients');
//         return response.data;
//     },

//     // Get patient by ID
//     getPatientById: async (id) => {
//         const response = await api.get(`/patients/${id}`);
//         return response.data;
//     },

//     // Create new patient
//     createPatient: async (patientData) => {
//         const response = await api.post('/patients', patientData);
//         return response.data;
//     },

//     // Update patient
//     updatePatient: async (id, patientData) => {
//         const response = await api.put(`/patients/${id}`, patientData);
//         return response.data;
//     },

//     // Delete patient
//     deletePatient: async (id) => {
//         const response = await api.delete(`/patients/${id}`);
//         return response.data;
//     }
// }; 