import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";


const authContext = createContext(null);

export const AuthProvider = ({children})=>{
    const navigate = useNavigate();
    const[user, setUser] = useState(null);
    
    const login = async(_user)=>{
        setUser(_user);       
        console.log("user logged in") 
    }

    const logout = async()=>{
        setUser(null);
        navigate('/')
    }

    return (<authContext.Provider value={{user, login, logout}}>{children}</authContext.Provider>)

}

export const useAuth = ()=>{
    return useContext(authContext);
}