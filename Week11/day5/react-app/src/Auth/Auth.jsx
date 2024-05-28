import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../App";
import axios from "axios";
import Login from "../components/Login";


const Auth = ({children}) => {
    const{token} = useContext(AuthContext);
    const[redirect, setRedirect] = useState(false);

    useEffect(() =>{
        verify();
    },[])

    const verify = async() => {
        try {
            const response = await axios.get("http://localhost:5000/users/verify", {
                headers: {
                    "x-access-token": token?.token
                },
                withCredentials:true,
            });
            if(response.status === 200) setRedirect(true)
        }catch (error){
            setRedirect(false)
        }
    }

    return redirect ? children: <Login page = {"Login"}/>
}

export default Auth;