import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from './App.jsx';
import Places from "./Components/Places.jsx";
import School from "./Components/School.jsx";
import React from 'react'
import ReactDOM from 'react-dom/client'
import School1 from "./Components/School1.jsx";
import School2 from "./Components/School2.jsx";
import School3 from "./Components/School3.jsx";
import College from "./Components/College.jsx";
import College1 from "./Components/College1.jsx";
import College2 from "./Components/College2.jsx";
import College3 from "./Components/College3.jsx";
import Hospital from "./Components/Hospital.jsx";
import Hospital2 from "./Components/Hospital2.jsx";
import Hospital3 from "./Components/Hospital3.jsx";
import Hospital1 from "./Components/Hospital1.jsx";
import Tourist from "./Components/Tourist.jsx";
import Tourist1 from "./Components/Tourist1.jsx";
import Tourist2 from "./Components/Tourist2.jsx";
import Tourist3 from "./Components/Tourist3.jsx";

const router = createBrowserRouter([
 {
    path: "/",
    element: <App />,
 },
 {
    path: "city/:cityName",
    element: <Places />,
 },
 {
  path: "school",
  element: <School />,
},
 {
  path: "school1",
  element: <School1 />,
},
 {
  path: "school2",
  element: <School2 />,
},
 {
  path: "school3",
  element: <School3 />,
},
 {
  path: "college",
  element: <College />,
},
 {
  path: "college2",
  element: <College2 />,
},
 {
  path: "college3",
  element: <College3 />,
},
 {
  path: "college1",
  element: <College1 />,
},
 {
  path: "hospital",
  element: <Hospital />,
},
 {
  path: "hospital1",
  element: <Hospital1 />,
},
 {
  path: "hospital2",
  element: <Hospital2 />,
},
 {
  path: "hospital3",
  element: <Hospital3 />,
},
 {
  path: "tourist",
  element: <Tourist />,
},
 {
  path: "tourist1",
  element: <Tourist1 />,
},
 {
  path: "tourist2",
  element: <Tourist2 />,
},
 {
  path: "tourist3",
  element: <Tourist3 />,
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}>
    <App />
 </RouterProvider>
);