import {useContext, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Box, TextField, Button} from "@mui/material";

import { AuthContext } from "../App";


const Login = ({page}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [message, setMessage] = useState();
    const {setToken} = useContext(AuthContext);
    const navigate = useNavigate();

    const loginRegister = async () => {
        if(page === "Login") {
            try {
                const response = await axios.post("http://localhost:5000/users/login",
                {
                    email,
                    password 
                }, {withCredentials: true})

                if(response.status === 200) {
                    setMessage("")
                    setToken(response.data);
                    navigate("/")
            }   
            } catch(error){
                console.log(error);
                setToken(null);
                setMessage(error.response.data.msg)

            }
        }
        else {
            try {
                const response = await axios.post("http://localhost:5000/users/register", {
                    email, password
                }, { withCredentials: true })
                if (response.status === 200) {
                    setMessage("")
                    console.log(response.data)
                    navigate("/login")
                }
            } catch (error) {
                console.log(error)
                setMessage(error.response.data.msg)
            }
        }
    }
  return (
    <>
        <div>{page}</div>
    <Box component={"form"} sx = {{m:1}} noValidate autoComplete="off">
        <TextField 
        sx={{m: 1}}
        id = "email"
        type= "email"
        label="Enter your email"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}/>
        <TextField
        sx={{m: 1}}
        id = "password"
        type= "password"
        label="Enter your password"
        variant="outlined"
        onChange={(e) => setPassword(e.target.value)}/>
    </Box>
    <Button variant="contained" onClick={loginRegister}>
        {page}
    </Button>
    <div>{message}</div>
    </>
    
  )
}

export default Login;