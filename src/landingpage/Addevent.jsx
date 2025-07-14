import { useState, } from "react"
import {useNavigate} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios"
import { useEffect } from "react";

export default function Addevent(){
const navigate = useNavigate();
const[non,setNone] = useState(null)
  useEffect(()=>{
async function send(){
  const checkval = await axios.get("https://eventbackend-dery.onrender.com/checkevent",{withCredentials:true})
  
const{message,status} = checkval.data;

if(status){
setNone("")
}else{
  toast.error(message)
  navigate("/")
}

}
   send()
  },[])






  
const [file,setFile] =useState(null);
const [form,setForm] =useState({
  uniqueid:"",
  title:"",
  description:"",
  price:"",
  location:""
});





function handlefilechange(e){
setFile(e.target.files[0])
}

function handlechange(e){
setForm({
  ...form,
 [ e.target.name] :e.target.value
})
}


 async function pass(e){
  e.preventDefault()
  
const formdata = new FormData();

formdata.append("title",form.title);
formdata.append("description",form.description);
formdata.append("price",form.price);

formdata.append("image",file)
formdata.append("location",form.location);



try{
  const value = await axios.post("https://eventbackend-dery.onrender.com/uploads",formdata,{withCredentials:true}
   
  )
  if(!value) return <div className="load-img"><img src="/load1.gif" alt="loading-gif" /></div>; 
  toast.success("success");
  setTimeout(() => {
    navigate("/event");
  }, 1000);

}
catch(err){
  alert(err)
}



}


const imgval = file ? URL.createObjectURL(file) : null;


  

    return(
     
<div style={{marginTop:"9rem"}} className="container">

      <div className="outer-inst">
        <div className="inner-inst">
         <div className="adjust">
        <form onSubmit={pass}>
             <p>
            Title
          </p>
          <input type="text" placeholder="Suitable Title"   value={form.title}   name="title"  onChange={handlechange} />
           <p>
            Decriptsion
          </p>
        <textarea name="description" cols={15} rows={4} value={form.description}  placeholder="Suitable Description" onChange={handlechange}      id=""></textarea>
         
             <p>
            Image 
          </p>
          <input type="file" accept="image/*" onChange={handlefilechange} />
           <p>
            Price
          </p>
          <input name="price" id="price-inp" type="number"  value={form.price} onChange={handlechange}  placeholder="XX,XXX" />
         
           <p>
            Location
          </p>
          <input name="location" id="price-inp" type="text" value={form.location} onChange={handlechange}  placeholder="City , State" />
         
<div className="imgdiv">
<h3>Preview Image</h3>

  {imgval && <img id="imgpreview" src={imgval} alt="preview" />}
</div>
 <button className="btn btn-primary">save</button>

        </form>
         </div>
        
        </div>
      </div>
  
</div>


    )
}