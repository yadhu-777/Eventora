import { useEffect } from "react";

import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";



export default function Showpage(){
 const [data1,setData] = useState([])
   
   
    const location = useLocation();
const datas = location.state;
console.log(datas.val)

    useEffect(()=>{
       
       
                setData(datas.val)
           
        
    },[datas])

  


           
    return(

<div style={{marginTop:"7rem"}} className="container">
    <div id="cardimg" className="row ">
        <div id="event-img" className="col-lg-6 col-md-8 ">
            
             <div   className="card p-2">
  <img  className="card-img-top" src={data1.imageUrl} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">{data1.title}</p>
    <p className="card-text">{data1.description}</p>
    <p className="card-text">₹{data1.price}</p>
    <p className="card-text">{data1.location}</p>
   
  </div>
</div>
        </div>
    </div>
</div>





    )
}