// import React, {  useState } from 'react'
// import {Link, useHistory} from 'react-router-dom'
// import '../css/Signinup.css'


// export const Signup = () => {
//     const history=useHistory()
//     const [name,setName]=useState("")
//     const [password,setPassword]=useState("")
//     const [email,setEmail]=useState("")
//     const [toast,setToast]=useState("")
//     const [toastColor,setToastColor]=useState("red")
//     const [image,setImage]=useState("")
//     const [url,setUrl]=useState(undefined)
//     const [iname, setiname] = useState('put a pic')

//     return (
//         <div className="mycard">
//             <div className="auth-card">
//                 <h2>Signup</h2>
//                 <form className="signinup form">
//                     <input type="text" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
//                     <input type="text" placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
//                     <input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                      
//                     <button className="btn" type="submit" style={{marginTop:'1rem'}} >Signup</button>
                    
//                     <h5>
//                         <Link to="/signin">Already have an account?</Link>
//                     </h5>



//                     <h3 style={{color:toastColor}}>{toast}</h3>
//                 </form>
//             </div>
//         </div>
//     )
// }


