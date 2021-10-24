import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import '../css/Signinup.css'
export const Signup = () => {
    const history=useHistory()
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const [toast,setToast]=useState("")
    const [toastColor,setToastColor]=useState("red")

    const uploadFields=async(e)=>{
        //console.log("upfield")
        try{
            const res=await fetch("/signup",{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name:name,
                    email:email,
                    password:password,
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
                setToast(data.message)
                setToastColor("green")
                await setTimeout(function(){
                    setToast("")
                    history.push('/signin')
                },1000);
        }
        }
        catch(err){
            console.log(err)
        }
    }
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
        uploadFields()

    }

    return (
        <div style={{height:'89.5vh'}}>
        <div className="head">
            <div className="fmusicplayer" style={{flexBasis:"100%"}}>
                <h1>Music Recommender</h1>
            </div>
    
        </div>

        <div className="mycard">
            <div className="auth-card">
                
                <h2>Signup</h2>
                <form className="signinup form" onSubmit={(e)=>PostData(e)}>
                    <input type="text" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <input type="text" placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    <input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                
                    <button className="btn" type="submit" style={{marginTop:'1rem'}} >Signup</button>
                    
                    <h5>
                        <Link to="/signin" style={{color:'var(--headingolor)'}}>Already have an account?</Link>
                    </h5>

                    <h3 style={{color:toastColor}}>{toast}</h3>
                </form>
            </div>
        </div>
        </div>
    )
}


