// import api from '../config';

// export const donorService = {
//     // Get all donors
//     getAllDonors: async () => {
//         const response = await api.get('/donors');
//         return response.data;
//     },

//     // Get donor by ID
//     getDonorById: async (id) => {
//         const response = await api.get(`/donors/${id}`);
//         return response.data;
//     },

//     // Create new donor with file upload support
//     createDonor: async (donorFormData) => {
//         const response = await api.post('/donors', donorFormData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//             },
//         });
//         return response.data;
//     },

//     // Update donor
//     updateDonor: async (id, donorData) => {
//         const response = await api.put(`/donors/${id}`, donorData);
//         return response.data;
//     },

//     // Delete donor
//     deleteDonor: async (id) => {
//         const response = await api.delete(`/donors/${id}`);
//         return response.data;
//     }
// }; 