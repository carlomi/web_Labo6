const {allUsers, addUserController, showForm} = require('../controllers/user.controller');
const router = require('express').Router();
router.get('/', showForm);
router.post('/home',addUserController);
router.get('/allUsers', allUsers)

module.exports = router;
