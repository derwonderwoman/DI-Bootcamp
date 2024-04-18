const express = require('express')

const { getAllUsers, getUserById, createUser, updateUser, loginUser } = require('../controllers/reg.control.js')

const router = express.Router()

router.get('/users', getAllUsers)
// router.get('/users/:id', getUserById) 
// router.get('/login',(req, res) => {
//     res.render("login", { message: ''})
// })
// router.post('/login', loginUser)
// router.get('/register',(req, res) => {
//     res.render("register", { error: '', user_exists: '', success: ''})
// })
// router.post('/register', createUser)
// router.put('/users/:id', updateUser)

module.exports = router