export default function Eventcard(val){


    return(

    
 
            
            <div   className="card ">
  <img style={{height:"35vh"}} className="card-img-top" src={val.val.imageUrl} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">{val.val.title}</p>
   
  </div>
</div>
       
            
  

    )
}