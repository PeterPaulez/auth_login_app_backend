const { Router } = require('express');
const { googleAuth } = require('../controller/auth');
const router = Router();

router.post('/google', googleAuth);


module.exports = router;