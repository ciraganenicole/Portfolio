import {React, useState} from 'react';
import Project from './project';
import Popop from './popup';
import styled from "styled-components";
import projects from "./data"

const Projects = () => {

const [popup,setPopup] = useState('');
const [show, setShow] =  useState(false);

const handleClick = (key) => {
  setPopup(
    projects.filter((modal)=>modal.id === key ? {...modal}:false)
  )
 console.log(popup)

  setShow(true)
}

const handleShow = () => {
  setShow(false)
}
if(show){
  document.body.classList.add('overflow-hidden')
}else{
  document.body.classList.remove('overflow-hidden')
}
  return (
    <Wrapper>
    {show &&(
      <Popop handleshow={handleShow} popup={popup}/>
  )}
<div className="mainP md:p-6 h-auto md:w-auto border-black mt-6" id="projects">
            <Title > My done projects </Title>
      <div className="flex flex-wrap gap-x-8 gap-y-8 p-10 items-center justify-center">
      {projects.map((work,key)=>(
          <Project 
          key={key}
          id={work.id}
          image={work.imageSrc}
          titre={work.titre}
          tech={work.technolgies}
          handleClick={handleClick}
        />
      ))}
    </div>
    </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: relative;
  gap: 20px;
  text-align: center;
`;

const Title = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
`;

export default Projects;


