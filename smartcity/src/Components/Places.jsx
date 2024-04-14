
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import scl from "../assets/places/scl.jpg"
import hospital from "../assets/places/hospital.jpg"
import clg from "../assets/places/clg.jpg"
import tourist from "../assets/places/tourist.jpg"




const Places = () =>{
    const { cityName } = useParams();
   
    return(
        <>
{cityName === "Mumbai" && (
    <>
    <div className=" col-md-12">
        <h1 className="text-center mt-5 mb-5">What are you looking for in {cityName}</h1>
    </div>

<div className="places col-md-8 offset-2">
<div className="city-item">
<Link to="/school"><img  className="city-image" src={scl} alt="" style={{width:"450px",height:"350px"}}/></Link>
<p className="city-name" style={{fontSize:"64px"}}>School</p>
</div>
<div className="city-item">
<Link to="/college"><img className="city-image"  src={clg} alt="" style={{width:"450px",height:"350px"}}/></Link>
<p className="city-name" style={{fontSize:"64px"}}>College</p>

</div>
<div className="city-item">
<Link to="/hospital"><img  className="city-image" src={hospital} alt="" style={{width:"450px",height:"350px"}}/></Link>
<p className="city-name" style={{fontSize:"64px"}}>Hospital</p>

</div>
<div className="city-item">
<Link to="/tourist"><img className="city-image"  src={tourist} alt="" style={{width:"450px",height:"350px"}}/></Link>
<p className="city-name" style={{fontSize:"64px"}}>Tourist</p>


</div>
</div>
    </>
            
)}
{cityName === "Delhi" && (
    <>
    <div className=" col-md-12">
        <h1 className="text-center mt-5 mb-5">What are you looking for in {cityName}</h1>
    </div>

<div className="places col-md-8 offset-2">
<div className="city-item">
<Link to="/school1"><img  className="city-image" src={scl} alt="" style={{width:"450px",height:"350px"}}/></Link>
<p className="city-name" style={{fontSize:"64px"}}>School</p>
</div>
<div className="city-item">
<Link to="/college1"><img className="city-image"  src={clg} alt="" style={{width:"450px",height:"350px"}}/></Link>
<p className="city-name" style={{fontSize:"64px"}}>College</p>

</div>
<div className="city-item">
<Link to="/hospital1"><img  className="city-image" src={hospital} alt="" style={{width:"450px",height:"350px"}}/></Link>
<p className="city-name" style={{fontSize:"64px"}}>Hospital</p>

</div>
<div className="city-item">
<Link to="/tourist1"><img className="city-image"  src={tourist} alt="" style={{width:"450px",height:"350px"}}/></Link>
<p className="city-name" style={{fontSize:"64px"}}>Tourist</p>


</div>
</div>
    </>
            
)}
{cityName === "Dehradun" && (
    <>
    <div className=" col-md-12">
        <h1 className="text-center mt-5 mb-5">What are you looking for in {cityName}</h1>
    </div>

<div className="places col-md-8 offset-2">
<div className="city-item">
<Link to="/school2"><img  className="city-image" src={scl} alt="" style={{width:"450px",height:"350px"}}/></Link>
<p className="city-name" style={{fontSize:"64px"}}>School</p>
</div>
<div className="city-item">
<Link to="/college2"><img className="city-image"  src={clg} alt="" style={{width:"450px",height:"350px"}}/></Link>
<p className="city-name" style={{fontSize:"64px"}}>College</p>

</div>
<div className="city-item">
<Link to="/hospital2"><img  className="city-image" src={hospital} alt="" style={{width:"450px",height:"350px"}}/></Link>
<p className="city-name" style={{fontSize:"64px"}}>Hospital</p>

</div>
<div className="city-item">
<Link to="/tourist2"><img className="city-image"  src={tourist} alt="" style={{width:"450px",height:"350px"}}/></Link>
<p className="city-name" style={{fontSize:"64px"}}>Tourist</p>


</div>
</div>
    </>
            
)}
{cityName === "Rajasthan" && (
    <>
    <div className=" col-md-12">
        <h1 className="text-center mt-5 mb-5">What are you looking for in {cityName}</h1>
    </div>

<div className="places col-md-8 offset-2">
<div className="city-item">
<Link to="/school3"><img  className="city-image" src={scl} alt="" style={{width:"450px",height:"350px"}}/></Link>
<p className="city-name" style={{fontSize:"64px"}}>School</p>
</div>
<div className="city-item">
<Link to="/college3"><img className="city-image"  src={clg} alt="" style={{width:"450px",height:"350px"}}/></Link>
<p className="city-name" style={{fontSize:"64px"}}>College</p>

</div>
<div className="city-item">
<Link to="/hospital3"><img  className="city-image" src={hospital} alt="" style={{width:"450px",height:"350px"}}/></Link>
<p className="city-name" style={{fontSize:"64px"}}>Hospital</p>

</div>
<div className="city-item">
<Link to="/tourist3"><img className="city-image"  src={tourist} alt="" style={{width:"450px",height:"350px"}}/></Link>
<p className="city-name" style={{fontSize:"64px"}}>Tourist</p>


</div>
</div>
    </>
            
)}

        </>
    )
}
export default Places


