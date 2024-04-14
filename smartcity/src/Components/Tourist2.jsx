import { DehradunTouristPlaces } from "./TouristData";
const Tourist2 = () => {
  return (
    <>
   <div className="container">
    <div className="row">
        <div className="col-md-12 d-flex justify-content-between flex-wrap">
        {DehradunTouristPlaces.map((school,index) =>(
        <div class="card  mt-5" key={index} style={{width:"34rem",backgroundColor:"#31363F",color:"#fff"}}>
        <img class="card-img-top" src={school.img} alt="Card image cap" style={{height:"210px"}} />
        <div class="card-body">
          <h5 class="card-title">{school.name}</h5>
          <p class="card-text">
            {school.description}
          </p>
          <p class="card-text fw-bold">
           Address : {school.address}
          </p>
         
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

    ))}
        </div>
    </div>
   </div>
   
      
    </>
  );
};
export default Tourist2;
