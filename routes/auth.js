const express = require('express');
const { registerHospital, registerUser, loginHospital, loginUser } = require('../controllers/auth');

const router = express.Router();

const { protect } = require('../middlewares/auth');

router.post('/register/hospital', registerHospital);
router.post('/register/user', registerUser);
router.post('/login/hospital', loginHospital);
router.post('/login/user', loginUser);

module.exports = router;
