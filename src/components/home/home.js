import React from "react";
import Button from "./button";
import Profiles from "./profiles";
import Description from "./text";

const Home = () => {
 return (
  <>
  <div id="home">
   <div>
    <Profiles />
   </div>
   <div>
    <Description />
    <Button />
   </div>
  </div>
  </>
 )
}

export default Home;
