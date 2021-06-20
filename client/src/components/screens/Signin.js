import {React, useState} from 'react'
import { Link,useHistory } from 'react-router-dom'

import '../css/Signinup.css'

export const Signin = () => {
    //const {dispatch} = useContext(UserContext)
    const history=useHistory()
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const [toast,setToast]=useState("")
    const [toastColor,setToastColor]=useState("red")

    return (
        <div>
         <div className="mycard">
            <div className="auth-card">
                <h2>Login</h2>
                <form className="signinup form">
                    <input type="text" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    <button className="btn" type="submit" >Signin</button>
                    <h5>
                        <Link to="/signup">Dont have an account?</Link>
                    </h5>
                    <h3 style={{color:toastColor}}>{toast}</h3>
                </form>
            </div>
        </div>
        </div>
        
    )
}

