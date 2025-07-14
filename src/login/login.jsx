import { useContext, useState } from "react";
import axios from "axios"
import { useNavigate} from "react-router-dom";
import {  toast } from "react-toastify";
import { useEffect } from "react";
import { Barcontext } from "../Barcontext";

export default function Login(){
      const {issigned,setSigned} = useContext(Barcontext)
const navigate = useNavigate()
    const[check,setCheck] = useState({
        email:"",
        password:""
    })



    function handlechnage(e){

setCheck({...check,
    [e.target.name]:e.target.value
})


    }


function handlesubmit(e){
e.preventDefault();

  async  function sendvalue(){
        const sendval = await axios.post("https://eventbackend-dery.onrender.com/login",check,{withCredentials:true})

const{message,status} = sendval.data;
if(status){
   
    toast.success(message,{position:"top-center"});
    setSigned(false)
  setTimeout(()=>{
      navigate("/")
  },500)

}
else{
    toast.error(message);
}

    }
    sendvalue();

 setCheck({ email: "", password: "" });


}




    return(


<div style={{marginTop:"7rem"}} className="container">
    <div className="outerlogin">
        <div className="innerlogin">
          <div className="innerloginele">
             <form onSubmit={handlesubmit}>
                   <h1 className="header">Login</h1>
 <label htmlFor="">
                Username
            </label>
            <input type="text"  name="email" value={check.email} onChange={handlechnage} placeholder="email" required/>
             <label htmlFor="">
                Password
            </label>
            <input type="password" name="password" value={check.password} onChange={handlechnage} placeholder="pasword" required/>
<button className="btn btn-primary">Login</button>

             </form>



          </div>
        </div>
    </div>
</div>

    )
}