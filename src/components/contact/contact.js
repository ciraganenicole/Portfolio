import React from "react";
import Paragraph from "./paragraph";
import Form from "./form";
import { BsLinkedin,BsTwitter} from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import styled from "styled-components";

const Contact = () => {

  return (
<Wrapper>
<div className="flex flex-col mt-14 p-4" id="contact">
<h1 className="text-center text-4xl  text-primary font-bold contact-titre mb-10 text-white">Contact</h1>
<div className="flex flex-col items-center justify-center xl:flex-row">
        <Paragraph />
        <Form />
    </div>
</div>
<span className="w-full block bg-black border drop-shadow-md  border-indigo-900"></span>
<p className=" flex justify-center p-4">
<a href="https://www.linkedin.com/in/ciraganenicole/" className=" mr-4 xl:mr-16">
     <BsLinkedin/>
  </a>
  <a href="https://twitter.com/CiraganeN" className=" mr-4  xl:mr-16">
      <BsTwitter/>
  </a>
  <a href="https://github.com/ciraganenicole" className=" mr-4 xl:mr-16">
      <GoMarkGithub/>
  </a>
</p> 
</Wrapper>
  )
}
const Wrapper = styled.div`
  position: relative;
  gap: 20px;
  text-align: center;
  padding: 10px;
  background: linear-gradient(250deg, #663182  6.33%, #322d6d 39.13%);
  color: rgba(255, 255, 255, 0.7);
`;

export default Contact;