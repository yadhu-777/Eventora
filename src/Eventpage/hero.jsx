
import { Link } from "react-router-dom";
import Eventcard from "./Eventcard"
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";


export default function Hero(){
  const[data,setData] = useState([]);
  useEffect(()=>{
async function insert(){
  const res =await axios.get("https://eventbackend-dery.onrender.com/info");
setData(res.data);

}

insert();


  },[data])
 if(data.length === 0) return <div className="load-img"><img src="/load1.gif" alt="loading-gif" /></div>; 
    return(
        


<>

<div style={{marginTop:"9rem"}}  className="container">
    <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-xsm-2 row-cols-1 g-5">
    

        {data.map((dataa)=>(
     
<Link id="link" to={`/card/${dataa._id}`}>  

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