export default function Booked({vall}){


    return(

    
 
            
            <div   className="card ">

  <div  style={{padding:"1rem"}} className="card-body">
     <img style={{height:"35vh"}} className="card-img-top" src="/party.jpg" alt="Card image cap"/>
    <p style={{marginTop:"1rem"}} className="card-text">{new Date(vall.date).toLocaleDateString()}</p>
    <p className="card-text">{vall.title}</p>
    
     <p className="card-text">{vall.description}</p>
       <p className="card-text">{vall.location}</p>
         
   
  </div>
</div>
       
            
  

    )
}