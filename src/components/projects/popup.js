import React from 'react'
import { VscLiveShare,VscGithubInverted,VscClose} from "react-icons/vsc";

const Popop = ({popup, handleshow}) => {

  return (
    <div className="h-screen w-screen fixed top-0 left-0 right-0 bottom-0 the-modal">
    <div className="bg-blue-450 opacity-50 h-screen w-auto fixed top-0 left-0 right-0 bottom-0" onClick={handleshow}></div>
        <div className="bg-white text-center absolute top-0 left-0 md:w-6/12 h-auto transform flex flex-col items-center justify-center md:gap-2 md:mt-1 md:ml-p25 rounded md:p-2 md:mb-16 pop"> 
        <div className="w-full flex items-center justify-end mr-1 text-3xl text-myred">
            <span onClick={handleshow}><VscClose/></span>  
        </div>
          <div className="md:w-11/12 pop-image shadow shadow-blue-450">
            <img src={popup[0].popupDescription.imageSrc} alt="" className="w-full h-full"/>
          </div>
          <div className="md:flex md:w-full place-content-between title-and-go">
            <h1 className="ml-4 font-bold text-xl pop-titre">{popup[0].popupDescription.titre}</h1>
            <p className="md:flex md:gap-4 md:mr-4 p-0 pop-go-pro ml-4">
              <a href={popup[0].popupDescription.demoLink} className="bg-primary md:w-28 flex gap-2 items-center place-content-center text-white rounded">Live<VscLiveShare/></a>
              <a href={popup[0].popupDescription.source} className="bg-primary md:w-28 flex gap-2 items-center place-content-center text-white rounded">Source<VscGithubInverted/> </a>
            </p>
          </div>
              <ul className="md:flex flex-wrap w-full place-content-start gap-2 ml-8 pop-tech">
              {popup[0].popupDescription.technolgies.map((tech)=>(
                <li className="bg-primary rounded md:p-1 text-white md:text-xs text-center p-2 "> {tech}</li>
              ))}
              </ul>
          <div className="md:text-justify text-start text-justify m-4 pop-text">
            {popup[0].popupDescription.description}
          </div>
</div> 
</div>
  )
}
export default Popop