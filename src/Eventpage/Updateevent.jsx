import axios from "axios";
import {useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import { toast } from "react-toastify";



export default function Updateevent(){
  const navigate = useNavigate();
    const [form,setForm] = useState({
        title:"",
        description:"",
        imageUrl:"",
        price:"",
        location:""
    });


const[file,setFile] = useState("");

    const Location = useLocation();
    const {id} = Location.state ;

useEffect(()=>{

 async function recval(){
    const returnval = await axios.get(`https://eventbackend-dery.onrender.com/details/${id}`)
    setForm(returnval.data.datas);
}
recval()

},[])


function handleupdate(e){
    setForm({
      ...form,  [e.target.name]:e.target.value
    })
}

function handleimage(e){
  if(e.target.files.length >0){
setFile(e.target.files[0]);
  }else{
    setFile(null)
  }

}


  
function handlesubmit(e){
    
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("id",id)
formdata.append("title",form.title)
formdata.append("description",form.description)
formdata.append("image",file)
formdata.append("price",form.price)
formdata.append("location",form.location)

async function sendval(){
    const sendformval = await axios.post("https://eventbackend-dery.onrender.com/update",formdata,{withCredentials:true});
const{message,status} = sendformval.data;

    if(!status){
      toast.error(message)
      setTimeout(() => {
        navigate("/ownevent")
      }, 1000);

    }
    else{
      toast.success(message);
      setTimeout(() => {
        navigate("/")
      }, 1000);
    }
}

sendval()


}
const imgvval = file ? URL.createObjectURL(file) : form.imageUrl ;

    return(
            
<div style={{marginTop:"9rem"}} className="container">

      <div className="outer-inst">
        <div className="inner-inst">
         <div className="adjust">
        <form onSubmit={handlesubmit} >
             <p>
            Title
          </p>
          <input type="text" placeholder="Suitable Title"   value={form.title} onChange={handleupdate}   name="title"  required />
           <p>
            Decriptsion
          </p>
        <textarea name="description" cols={15} rows={4} value={form.description} onChange={handleupdate}  placeholder="Suitable Description"      required></textarea> 
         
             <p>
            Image 
          </p>
          <input type="file" accept="image/*"    onChange={handleimage}/>
           <p>
            Price
          </p>
          <input name="price" id="price-inp" type="number"  value={form.price} onChange={handleupdate}   placeholder="XX,XXX" />
         
           <p>
            Location
          </p>
          <input name="location" id="price-inp" type="text" value={form.location} onChange={handleupdate}   placeholder="City , State" />
          
<div className="imgdiv">
<h3>Current Image</h3>

 <img id="imgpreview" src={imgvval ||form.imageUrl} alt="preview" />
</div>
 <button className="btn btn-primary">save</button>

        </form>
         </div>
        
        </div>
      </div>
  
</div>


    )
}