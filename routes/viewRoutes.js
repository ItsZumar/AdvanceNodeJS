const express = require('express');
const viewController = require('./../controllers/viewControllers');
const authController = require('./../controllers/authController');

const router = express.Router();

router.use(authController.isLoggedIn);

router.get('/', viewController.getOverview);
router.get('/tour/:slug', viewController.getTour);
//Login
router.get('/login', viewController.getLoginForm);

module.exports = router;
