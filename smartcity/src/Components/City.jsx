

import { Link } from "react-router-dom";
import mumbai from "../assets/city/mumbai.jpg"
import delhi from "../assets/city/delhi.jpg"
import raj from "../assets/city/raj.jpg"
import deh from "../assets/city/deh.jpg"
function City() {
 const cities = ["Mumbai", "Delhi", "Dehradun", "Rajasthan"];

 return (
    // <div className="col-md-12 city">
    //   {cities.map((city, index) => (
    //     <Link style={{width: "200px",
    //     height: "200px",
    //    borderRadius: "100px",
    //     backgroundColor:" #F4CE14",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     fontSize: "40px",
    //     textDecoration:"none",
    //     color:"black"}} key={index} to={`/city/${city}`}>
    //       {city}
    //     </Link>
    //   ))}
    // </div>

    <div className="col-md-12 city">

      <div className="city-item" >
       
                <Link to={`/city/Mumbai`}> <img className="city-image" src={mumbai} alt="" style={{width: "250px",
        height: "300px"}}/></Link>
        <p className="city-name">Mumbai</p>

      </div>

      <div className="city-item" >
       
                <Link to={`/city/Delhi`}> <img className="city-image" src={delhi} alt="" style={{width: "250px",
        height: "300px"}}/></Link>
        <p className="city-name">Delhi</p>

      </div>

      <div className="city-item" >
       
                <Link to={`/city/Dehradun`}> <img className="city-image" src={deh} alt="" style={{width: "250px",
        height: "300px"}}/></Link>
        <p className="city-name">Dehradun</p>

      </div>

      <div className="city-item" >
       
                <Link to={`/city/Rajasthan`}> <img className="city-image" src={raj} alt="" style={{width: "250px",
        height: "300px"}}/></Link>
        <p className="city-name">Rajasthan</p>

      </div>
      
    
     

    </div>
 );
}

export default City;