import React from "react"
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import styled from "styled-components";

const Profiles = () => {
 return (
  <Wrapper>
  <ul className="flex items-end justify-end">
   <li className="mr-16 text-white">
    <a href="https://www.linkedin.com/in/ciraganenicole/">
     <FaLinkedinIn />
    </a>
   </li>
   <li className="mr-16 text-white">
    <a href="https://twitter.com/CiraganeN">
     <FaTwitter />
    </a>
   </li>
   <li className="mr-16 text-white">
    <a href="https://github.com/ciraganenicole">
     <FaGithub />
    </a>
   </li>
  </ul>
  </Wrapper>
 )
}
const Wrapper = styled.div`
  position: relative;
  gap: 20px;
  text-align: start;
`;

export default Profiles;
