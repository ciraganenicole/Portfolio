import React from "react";
import Technologies from "./technologies";
import Tools from "./tools";
import Professional from "./professional";
import styled from "styled-components";

const Skills = () => {
    return (
        <Wrapper>
        <div id="skills">
        <h1 className="text-center mb-8 text-3xl font-bold">My skills</h1>
        <ul className="w-4/5 m-auto shadow-2xl">
            <li className="py-4 rounded-2xl">
                <h2 className="mb-6 text-2xl font-semibold text-center">Technologies</h2>
                <Technologies/>
            </li>
            <li className="py-4 rounded-2xl">
                <h2 className="mb-6 text-2xl font-semibold text-center">Tools and Methods</h2>
                <Tools/>
            </li>
            <li className="py-4 rounded-2xl">
                <h2 className="mb-6 text-2xl font-semibold text-center">Professional</h2>
                <Professional/>
            </li>
            
        </ul>
        </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
  position: relative;
  gap: 20px;
  text-align: center;
  padding: 10px;
  background: linear-gradient(150deg, #663182  6.33%, #322d6d 39.13%);
  color: white; 
`;


export default Skills;