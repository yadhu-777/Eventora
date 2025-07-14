import { useContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import {  toast } from "react-toastify";

export default function Events(){

    const navigate = useNavigate();




    const[data1,setData1] = useState(null);
     const { id } = useParams();
     useEffect(()=>{
    async function search(){
        const findval = await axios.get(`https://eventbackend-dery.onrender.com/details/${id}`,{withCredentials:true})
        const{datas,isauth} = findval.data;
      
       
 
        setData1(datas)
      
      
    }
    search()
},[id])


function edithandle(){
    navigate("/update",{
        state:{
           id: data1._id
        }
    })
   
 
}


async function deletehandle(){
    const del = await axios.delete(`https://eventbackend-dery.onrender.com/delete/${id}`,{withCredentials:true});

const{message,status} = del.data;
if(status){
    toast.success(message)
    setTimeout(()=>{
        navigate("/")
    })
}else{
    toast.error(message)
     setTimeout(()=>{
        navigate("/")
    })
}

}




   if (!data1) return <div className="load-img"><img src="/load1.gif" alt="loading-gif" /></div>; 

    return(

<div style={{marginTop:"7rem"}} className="container">
    <div id="cardimg" className="row ">
        <div id="event-img" className="col-lg-6 col-md-8 ">
            
             <div   className="card p-2">
  <img  className="card-img-top" src={data1.imageUrl} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">{data1.title}</p>
    <p className="card-text">{data1.description}</p>
    <p className="card-text">₹{data1.price.toLocaleString()}</p>
    <p className="card-text">{data1.location}</p>

 <button onClick={edithandle} id="btn-right" className="btn btn-primary">Edit</button>
      <button onClick={deletehandle}  className="btn btn-danger">Delete</button>

  </div>
</div>
        </div>
    </div>
</div>





    )
}