import {
    _getAllUsers,
    _getUserById,
    _registerUser,
    _updateUser,
    _loginUser
  } from "../models/reg.models.js";
  
  export const getAllUsers = (req, res) => {
    _getAllUsers()
      .then((data) => {
      res.json(data);
      })
      .catch((e) => {
      res.status(404).json({ msg: "something went wrong" });
      console.log(e);
      });
  };
  
  export const getUserById = (req, res) => {
    const { id } = req.params;
    _getUserById(id)
      .then((data) => {
      res.json(data);
      })
      .catch((e) => {
        res.status(404).json({ msg: "something went wrong" });
        console.log(e);
      });
  };
  
  export const registerUser = (req, res) => {
    const {first_name,last_name,email,username,password_hash} = req.body;
    _registerUser(first_name,last_name,email,username,password_hash)
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  
  export const updateUser = (req, res) => {
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
  
  export const loginUser = (req, res) => {
      const {username,password_hash} = req.body;
      _loginUser(username,password_hash)
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        console.log(e);
      });
    };
  