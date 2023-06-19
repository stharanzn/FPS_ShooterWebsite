import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {initializeApp} from "firebase/app"
import {getAuth, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword} from "firebase/auth"
import {getDatabase, ref, set, child, get} from "firebase/database"


const authContext = createContext(null);



const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export function getHashedPassword(pass){
    return `${pass}123`
}

export const AuthProvider = ({children})=>{
    const navigate = useNavigate();
    const[user, setUser] = useState(null);
    
    const login = async (_user)=>{        
        console.log(_user)
        const pass = getHashedPassword(_user.password)
        console.log(pass)
        signInWithEmailAndPassword(firebaseAuth, _user.email, pass).then((userCred)=>{                       
            navigate("/FPS_ShooterWebsite", {replace: true}) 
            console.log(userCred)                                                                      
        }).catch((err)=>{
            console.log(err.message);
            alert(err.message)
        })

    }

    onAuthStateChanged(firebaseAuth, async (_user)=>{
        if(_user){    
            console.log(_user.uid)            
            const db = getDatabase();
            await get(child(ref(db),"public/" + _user.uid + "/publicData")).then((snapshot)=>{
                if(snapshot.exists()){                        
                    const username = snapshot.val().username                        
                    setUser(username)                    
                                                                      
                }else{                        
                    console.log("no data available")
                }
            })
        }
    })

    // #region create user
    function addUserToDatabase(data){
        const db = getDatabase();
    
        if(data!== null){

            set(ref(db, 'public/' + data.uid + "/publicData"), {
                username: data.username,
                email: data.email,
                profilePic: "profile pic link"               
            }).catch((err)=>{
                console.log(err)
                alert(err)
            })
            
        }
    
    }  

    const create = async(__user)=>{

        var pass = getHashedPassword(__user.password)
        var email = __user.email
        console.log(__user)
        console.log(pass)

        await createUserWithEmailAndPassword(firebaseAuth, email, pass).then((userCred)=>{
            const _user = userCred.user;            
            setUser(__user.username);                    
            __user.uid = _user.uid;  
            addUserToDatabase(__user)
            navigate('/FPS_ShooterWebsite/profile/'+__user.username, {replace: true})
            
        }).catch((err)=>{
            console.log(err)
            alert(err);
        })
    }

    // #endregion

    const logout = async()=>{
        
        firebaseAuth.signOut().then(()=>{
            navigate("/FPS_ShooterWebsite", {replace: true})
            setUser(null);
        }).catch((err)=>{
            console.log(err)
        })
        
    }

    return (<authContext.Provider value={{user, login, logout, getHashedPassword, create}}>{children}</authContext.Provider>)

}

export const useAuth = ()=>{
    return useContext(authContext);
}