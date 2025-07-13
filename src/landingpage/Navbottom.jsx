import { Link } from "react-router-dom";
import "./Front.css";
export default function Navbottom(){
    return(
        <nav>

<div className="navouter2">
    <div className="navinner2">
        <ul id="letter" type="none">
           <li> <Link id="link" to="/">Home</Link></li>
             <li><Link  id="link" to="/addevent">Add Event</Link></li>
              <li>
                
           <Link  id="link" to="/ownevent">    your events </Link> </li>
          <li>  <Link  id="link" to="/about">   Bookings </Link> </li>
        </ul>
       
    </div>
      
</div>


        </nav>



    )
}