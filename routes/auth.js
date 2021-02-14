const { Router } = require('express');
const { googleAuth, callBackApple, siginApple } = require('../controller/auth');
const router = Router();

// Check Google Token
router.post('/google', googleAuth);

// The callback route used for Android, which will send the callback parameters from Apple into the Android app.
// This is done using a deeplink, which will cause the Chrome Custom Tab to be dismissed and providing the parameters from Apple back to the app.
router.post("/apple/callback", callBackApple);

// Endpoint for the app to login or register with the `code` obtained during Sign in with Apple
//
// Use this endpoint to exchange the code (which must be validated with Apple within 5 minutes) for a session in your system
router.post("/apple/signin", siginApple);


module.exports = router;