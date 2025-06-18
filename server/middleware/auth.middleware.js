// const jwt = require('jsonwebtoken');
// const config = require('../config/auth.config');
// const User = require('../models/user.model');

// // Verify JWT token
// exports.verifyToken = async (req, res, next) => {
//     try {
//         const token = req.headers['x-access-token'] || req.headers['authorization'];

//         if (!token) {
//             return res.status(403).json({
//                 success: false,
//                 message: 'No token provided'
//             });
//         }

//         // Remove 'Bearer ' if present
//         const tokenValue = token.startsWith('Bearer ') ? token.slice(7) : token;

//         // Verify token
//         const decoded = jwt.verify(tokenValue, config.secret);
//         req.userId = decoded.id;

//         next();
//     } catch (error) {
//         console.error('Error in verifyToken:', error);
//         return res.status(401).json({
//             success: false,
//             message: 'Unauthorized - Invalid token'
//         });
//     }
// };

// // Check if user is admin
// exports.isAdmin = async (req, res, next) => {
//     try {
//         const user = await User.findById(req.userId);

//         if (!user) {
//             return res.status(404).json({
//                 success: false,
//                 message: 'User not found'
//             });
//         }

//         if (user.role !== 'admin') {
//             return res.status(403).json({
//                 success: false,
//                 message: 'Requires admin role'
//             });
//         }

//         next();
//     } catch (error) {
//         console.error('Error in isAdmin:', error);
//         return res.status(500).json({
//             success: false,
//             message: 'Error checking admin role',
//             error: error.message
//         });
//     }
// }; 