import { useContext, useState } from "react";
import "./Front.css";

import { Barcontext } from "../Barcontext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
export default function Navtop(){
const navigate = useNavigate();
        const{Open,setOpen,issigned,setSigned} = useContext(Barcontext);
       
const [query,setQuery] = useState(null)
const[data,setData] = useState([]);
const[close,setClose] =useState(true);


function handleclose(){
setClose(false)
}


function click(){
setOpen(!Open)
}


useEffect(()=>{

const time = setTimeout(()=>{
if(query){
    axios.get(`http://localhost:3000/suggest?q=${query}`,{withCredentials:true})
    .then((datas)=> {
       
setData(datas.data.info)

    })
    .catch((err)=>{
        console.log(err)
    })
}else{
    setData([])
}


},600)
 console.log(data)
    return ()=> clearTimeout(time)
},[query])







function handleinput(e){
 setClose(true)
    setQuery(e.target.value)

}
function handlesearch(val){
 
  try{

navigate("/showpage",{
    state:{
        val
    }
   
})
   
setData([])

  }
  catch(err){
    console.log(err)
  }
}

    return(
        <nav>

<div className="navouter">
    <div className="navinner">

  <div className="logo">
         <Link to="/" id="link1"> <img src="/logo1.jpg" alt="logo" /></Link>  
        </div>

        <div className="search">
            <input type="text"placeholder="search Event" value={query} onChange={handleinput} />
            {
 close && Array.isArray(data) && data.length > 0 && (
    <div className="navsuggest">
<ul id="ulll" type="none">

{data.map((val)=>(
   <li onClick={()=> handlesearch(val)}   ><i id="icons" class="fa-solid fa-magnifying-glass"></i>{val.title}&nbsp;,&nbsp;{val.location}</li>
))}


</ul>
    
</div>
)

    
}
<div onClick={handleclose} className={close ? "fullwiddiv" : "ksl"}>

</div>
              


        </div>
      
        <div className="auth">
{issigned &&

<div className="auth">
                <span>
                <p><Link to="/login" id="link" > Login</Link> </p>
              
            </span>
            <span> <p><Link to="/signup" id="link" > Signup</Link> </p></span>

</div>

}
        </div>
        <div onClick={click} className="menu">
            <span>
                
               {!Open ?  <i class="fa-solid fa-bars"></i> : <i class="fa-solid fa-xmark"></i> }
            </span>
        </div>
      
    </div>
    


      
</div>





        </nav>



    )
}