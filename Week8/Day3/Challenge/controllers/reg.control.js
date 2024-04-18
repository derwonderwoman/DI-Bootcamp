const { _getAllUsers, _getUserById, _createUser, _updateUser, _loginUser, _searchUser } = require('../models/reg.models.js');


const getAllUsers = (req, res) => {
    _getAllUsers()
    .then((data) => {
        res.json(data)
    })
    .catch((e) => {
        console.log(e)
        res.sendStatus(404)
    });
}

const getUserById = (req, res) => {
    const id = req.params['id']
    _getUserById(id)
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((e) => {
        res.status(404).send({message: 'something went wrong'})
        console.log(e)
    })
}

const loginUser = (req, res) => {
    const { username, password_hash } = req.body

    if (!username || !password_hash) {
        return res.render('login', { error: 'Please fill out all fields' });
    }
    
    _loginUser(username, password_hash)
    .then((success) => {
        if (success) {
            res.render('login', { message: `Welcome back again ${username}!` });
        } else {
            res.render('login', { message: 'You are not registered or password is invalid' });
        }
    })
    .catch((error) => { 
        console.log(error)
    })
 
}

const createUser = async (req, res) =>{
    const { email, username, password_hash, first_name, last_name } = req.body
    
    let user_exists = '';
    let error = '';
    let success = '';

    if (!email || !username || !password_hash || !first_name || !last_name) {
        error = 'Please fill out all fields';
    }

    const existing_user = await _searchUser(username)

    if (existing_user.length !== 0) {
        user_exists = 'Username already exists';
    }

    if (error || user_exists) {
        return res.render('register', { error, user_exists, success });
    }
    
    try {
        await _createUser(email, username, password_hash, first_name, last_name);
        success = 'User created successfully'
        return res.render('register', { success, error, user_exists });
    } catch (e) {
        console.log(e);
        return res.status(500).send('Error creating user. Please try again later.');
    }
}

const updateUser = (req, res) => {
    const { id } = req.params
    const { email, username, password_hash, first_name, last_name } = req.body

    _updateUser(id, email, username, password_hash, first_name, last_name)
    .then((data) => {
        res.json(data)
    })
    .catch((e) => {
        res.status(404).send({message: 'something went wrong'})
        console.log(e)
    })
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser, 
    updateUser,
    loginUser
}