import React, { useState} from 'react'
import { Link,useHistory } from 'react-router-dom'

export const Signin = () => {
    //const {dispatch} = useContext(UserContext)
    const history=useHistory()
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const [toast,setToast]=useState("")
    const [toastColor,setToastColor]=useState("red")
    const PostData=async (e)=>{
        e.preventDefault()
        // if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        //     setToast("invalid email")
        //     setToastColor("red")
        //     setTimeout(function(){
        //         setToast("")
        //     },1000);
        //     return
        // }
        try{
            const res=await fetch("/signin",{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email,
                    password
                })
            })
            const data=await res.json();
            if(data.error){
                setToast(data.error)
                setToastColor("red")
                setTimeout(function(){
                    setToast("")
                },1000);
            }
            else{
                localStorage.setItem("jwt",data.token)
                localStorage.setItem("user",JSON.stringify(data.user))
                setToast("signned in")
                setToastColor("green")

                setTimeout(function(){
                    setToast("")
                    history.push('/')
                },1000);
               // dispatch({type:"USER",payload:data.user})
                //console.log('lol')
            }
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <div className="mycard">
            <div className="auth-card">
                <h2>Login</h2>
                <form className="signinup form" onSubmit={(e)=>PostData(e)}>
                    <input type="text" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    <button className="btn" type="submit" >Signin</button>
                    <h5>
                        <Link to="/signup" style={{color:'var(--headingolor)'}}>Dont have an account?</Link>
                    </h5>
                    <h3 style={{color:toastColor}}>{toast}</h3>
                </form>
            </div>
        </div>
    )
}

