import React from "react";
import Descript from "./text";
import Resume from "./resume";

const Home = () => {

 return (
  <>
  <div className="flex flex-col items-center justify-center p-6 xl:p-16 " id="home">
   <div className="mb-10">
    <Descript />
   </div>
   <div>
     <Resume />
   </div>
  </div>
  </>
 )
}

export default Home;
