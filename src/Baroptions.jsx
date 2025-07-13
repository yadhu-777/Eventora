
import { useContext } from "react"
import { Barcontext } from "./Barcontext"
import { Link } from "react-router-dom";



export default function Baroptions(){
   
    const{Open,setOpen,issigned} = useContext(Barcontext);

function handleclick(){
setOpen(
    prev => !prev
)
}

    return(
        <>
        
         {Open && <div className="overlay" onClick={() => setOpen(false)}></div>}
        <div   className={Open ? "outerbar" :"inout"}>
         <div className="inbar">
            <ul id="underline"  Type="none">
                <li><Link onClick={handleclick} to="/" id="link1">Home</Link></li>
                <li><Link  onClick={handleclick}  to="/addevent" id="link1" >Add Events</Link></li>
                <li><Link  onClick={handleclick}  to="/ownevent" id="link1" >Your Events</Link></li>
            {issigned &&
               <div className="optionss">
                 <li id="marg"><Link  onClick={handleclick}    to="/login"  id="link1" >Login</Link></li>
                  <li><Link  onClick={handleclick}  to="/signup"   id="link1" >Signup</Link></li>
               </div>
            }
                <li><Link to="about"  onClick={handleclick}   id="link1" >Bookings</Link></li>
                 
            </ul>
         </div>
        </div>
        </>
    )
}