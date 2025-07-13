


export default function Leftevent({img,des}){
    return(


<div className="container mt-2">
    <div className="row mt-5">
      
          <div className="col-md-6 mt-5 d-flex justify-content-center">
<img id="common-img" src={img} alt="party-img" />
        </div>
        
     
        <div id="content" className="col-md-5 mt-5 d-flex align-items-center">
<p id="exp">{des}</p>
        </div>
     
    </div>
</div>

    )
}