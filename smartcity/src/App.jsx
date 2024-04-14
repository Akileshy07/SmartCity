import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react"

import Caraousel from "./Components/Caraousel";
import City from "./Components/City";
import Places from "./Components/Places";
import School from "./Components/School";



function App() {
  const [selectedTab, setSelectedTab] = useState("");
 
  return (
     <>
       <div className="container-fluid Main">
         <div className="row">
           <Caraousel></Caraousel>
         </div>
       </div>
       <div className="City-cont container">
         <div className="row">
           <City ></City>
         </div>
       </div>
       {selectedTab && (
<div className="cont container-fluid
">
<div className="place-cont container">
          <div className="row">
            <Places ></Places>
          </div>
        </div>
</div>
        
      )}
     </>
  );
 }

 

 export default App
