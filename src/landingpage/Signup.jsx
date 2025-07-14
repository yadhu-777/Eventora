import { useState } from "react"
import axios from "axios"
import { useNavigate} from "react-router-dom";
import {  toast } from "react-toastify";
import { Barcontext } from "../Barcontext";
import { useContext } from "react";

export default function Signup(){
  const {issigned,setSigned} = useContext(Barcontext)
const navigate = useNavigate();
const [Signupval,setSignupval] = useState({
  username:"",
  email:"" ,
  password:""

})

async function handlesubmit(e){
  

   e.preventDefault();


const signup = await axios.post("https://eventbackend-dery.onrender.com/signup",
Signupval,{withCredentials:true}
)



const{message,success} = signup.data;

if(success){
  toast.success(message,{position:"top-center"});
  setSigned(false)
   setTimeout(() => {
  navigate("/")
}, 1000);
}
else{

  toast.error(message,{position:"top-center"})
 
}



}









function handlechane(e){
    e.preventDefault();
  setSignupval({
    ...Signupval,
    [e.target.name]:e.target.value
  })

 

}



    return(

<div id="back-clr" style={{marginTop:"8rem" }} className="container">
    <div className="row">
        <div className="col">
            <div className="inp_outer">
              <div className="inner_inp">
                <div className="details">
                    <form onSubmit={handlesubmit}>
               
                       <h1 className="header">Signup</h1>
                   
<p>Name</p>
                    <input type="text" name="username" value={Signupval.username} placeholder="Your Name" onChange={handlechane} required />
                    <p>E-mail</p>
                    <input type="email" name="email" value={Signupval.email} placeholder="Enter Email"  onChange={handlechane} required />
                  
                      <p>Password</p>
               
                    <input type="password" name="password" value={Signupval.password} placeholder="Password"  onChange={handlechane} required />
                    <button className="btn btn-primary">Signup</button>


                    </form>
                </div>
              </div>
            </div>
        </div>
    </div>
  
</div>

    )
}