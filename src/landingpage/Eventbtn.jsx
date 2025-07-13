import { Link } from "react-router-dom";

export default function Button(){
    return(
      <div className="container">
        <div className="row">
            <div className="col text-center">
                 <Link to="/event"> <button id ="btn">Events <i className="fa-solid fa-arrow-right"></i></button></Link>
            </div>
        </div>
      </div>
    )
}