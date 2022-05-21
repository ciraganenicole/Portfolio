import React from "react"
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Profiles = () => {
 return (
  <>
  <ul>
   <li>
    <a>
     <FaLinkedinIn />
    </a>
   </li>
   <li>
    <a>
     <FaTwitter />
    </a>
   </li>
   <li>
    <a>
     <FaGithub />
    </a>
   </li>
  </ul>
  </>
 )
}

export default Profiles;
