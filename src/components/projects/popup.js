import React from 'react'
import {VscClose} from "react-icons/vsc";
import styled from "styled-components";

const Popop = ({popup, handleshow}) => {

  return (
    <div className="h-screen w-screen fixed top-0 left-0 right-0 bottom-0 the-modal">
    <div className="opacity-50 h-screen w-auto fixed top-0 left-0 right-0 bottom-0" onClick={handleshow}></div>
        <div className="text-center absolute md:w-8/12 h-auto transform flex flex-col items-center justify-center rounded mb-10"> 
        <Wrapper>
        <div className="w-full flex items-center justify-end mr-1 text-3xl text-white">
            <span onClick={handleshow}><VscClose/></span>  
        </div>
          <div className="md:w-11/12 pop-image shadow shadow-blue-450">
            <img src={popup[0].popupDescription.imageSrc} alt="" className="w-full h-full"/>
          </div>
          
          <div className="flex w-full justify-between mt-4">
            <h1 className="mt-2 font-bold text-xl text-start text-white">{popup[0].popupDescription.titre}</h1>
            <div className="flex p-0">
              <a href={popup[0].popupDescription.demoLink} className="bg-cyan-600 border-2  border-cyan-600 rounded-lg py-1 px-3 mr-4 mt-2 text-white w-30 shadow-2xl">See live</a>
              <a href={popup[0].popupDescription.source} className="bg-cyan-600 border-2  border-cyan-600 rounded-lg py-1 px-3  mr-4 mt-2 text-white w-30 shadow-2xl">See source </a>
            </div>
          </div>
              <ul className="flex flex-wrap mt-4">
              {popup[0].popupDescription.technolgies.map((tech)=>(
                <li className="border-2 rounded-lg px-1 mr-4 mt-2 text-white"> {tech}</li>
              ))}
              </ul>
          <div className="md:text-justify text-start text-justify mt-4">
            {popup[0].popupDescription.description}
          </div>
          </Wrapper>
</div> 
</div>
  )
}
const Wrapper = styled.div`
  width:60%;
  margin: 20px;
  text-align: center;
  padding: 20px;
  background: linear-gradient(120deg,  #663182 6.33%, #322d6d 39.13%);
  color: rgba(255, 255, 255, 0.7);
`;
export default Popop