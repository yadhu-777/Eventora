import axios from "axios"
import { useEffect, useState } from "react"
import Booked from "./Booked";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export default function Bookedevent(){
     const navigate = useNavigate();
const[value,setValue] =useState([]);
const[non,setNone] = useState(false)
useEffect(()=>{
    async function handle(){
const handledata = await axios.get("https://eventbackend-dery.onrender.com/bookedevents",{withCredentials:true})

const {message,datas} = handledata.data;
if(Array.isArray(datas) && datas.length > 0){
    setValue(datas)
  setNone(true)
}else{
    toast.error(message)
    navigate("/")
    
}

    }
handle()

},[non])
  if(!non) return <div className="load-img"><img src="/load1.gif" alt="loading-gif" /></div>; 

    return(
        <div style={{marginTop:"9rem"}}  className="container">
        <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-xsm-2 row-cols-1 g-5">

{

value.map((val)=>(
    <div className="col">
         <Booked vall={val}  />
    </div>
))

}

        </div>
        </div>
    )
}