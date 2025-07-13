import { useNavigate } from "react-router-dom"





export default function Notfound(){
const navigate = useNavigate()


 function handleclick(){
navigate("/");
 }


    return(
      
            <div className="outerfound">
                <div className="innerfound">
                   <h1> Uh oh! This page is lost in space!</h1>

                      <img src="space-img.png" alt="" />

                      <button  onClick={handleclick} className="btn btn-dark">Go Back <i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
       
    )
}
