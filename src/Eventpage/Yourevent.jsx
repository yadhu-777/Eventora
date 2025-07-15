
import { Link } from "react-router-dom";
import Eventcard from "./Eventcard"
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { Barcontext } from "../Barcontext";
import { toast } from "react-toastify";
import { useContext } from "react";



export default function Yourevent(){
  const navigate = useNavigate();
  const[data,setData] = useState([]);





  useEffect(()=>{
   
async function insert(){
  const res =await axios.get("https://eventbackend-dery.onrender.com/ownevent",{withCredentials:true});
  const{message,datas} = res.data;
 const ress =await axios.delete("https://eventbackend-dery.onrender.com/del",{withCredentials:true});
  if(message){
 toast.error(message,{position:"top-center"})
setTimeout(()=>{
  navigate("/")
},1000)
return
  }
setData(datas);


}
  insert();

  },[])
 if(data.length === 0) return <div className="load-img"><img src="/load1.gif" alt="loading-gif" /></div>; 
    return(
        


<>

<div style={{marginTop:"9rem"}}  className="container">
    <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-xsm-2 row-cols-1 g-5">
    

        {data && data.map((dataa)=>(
     
<Link id="link" to={`/own/${dataa._id}`}>  

<div className="col">
    <Eventcard key={dataa._id} val={dataa} />
</div>
</Link>
  
           
        ))}
        </div>
    
</div>
 
   </>

    )
}