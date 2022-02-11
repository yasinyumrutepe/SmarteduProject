const express = require('express')
const pageController = require('../controllers/pagesController')

const router = express.Router()

router.route('/').get(pageController.getHomePage)
router.route('/about').get(pageController.getAboutPage)
router.route('/register').get(pageController.getRegisterPage)
router.route('/login').get(pageController.getLoginPage)
router.route('/contact').get(pageController.getContactPage)
router.route('/dashboard').get(pageController.getDashboardPage)
module.exports=router;