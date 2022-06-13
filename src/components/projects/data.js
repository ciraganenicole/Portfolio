import image from "../../assets/images/image.png";
import portfolio from "./images/portfolio.png";
import vehicle from "./images/vehicle.png";
import todo from "./images/todo.png";
import calculator from "./images/calculator.png";

const project1 = {
    imageSrc: portfolio,
    titre: 'Portfolio',
    technolgies: ['React', 'JavaScript', 'TailwindCSS', 'Material UI', 'Styled Component'],
    id: 'firstProject',
    popupDescription: {
        imageSrc: portfolio,
        titre: 'Portfolio',
        technolgies: ['React', 'JavaScript', 'TailwindCSS', 'Material UI', 'Styled Component'],
        description: " This project is about myself. It's made to show my skills and what kinds of projects I am able to build",
        demoLink: 'https://ciraganenicole.vercel.app/',
        source: 'https://github.com/ciraganenicole/Portfolio',
    },
};

const project2 = {
    imageSrc: image,
    titre: 'Hackathon',
    technolgies: ['CSS', 'JavaScript', 'Html'],
    id: 'secondProject',
    popupDescription: {
        imageSrc: image,
        titre: 'Hackathon',
        technolgies: ['css', 'javascript', 'html'],
        description: 'This is the capstone project for the first module in which I built an hackathon online conference website. I built the home and the about pages',
        demoLink: 'https://ciraganenicole.github.io/Capstone-Project/',
        source: 'https://github.com/ciraganenicole/Capstone-Project',
    },
};

const project3 = {
    imageSrc: todo,
    titre: 'To-do list',
    technolgies: ['Html', 'Css', 'JavaScript'],
    id: 'thirdProject',
    popupDescription: {
        imageSrc: todo,
        titre: 'To-do list',
        technolgies: ['Html', 'Css', 'JavaScript'],
        description: 'This project was built by implementing the four basic functions, which are Create, Read, Update, and Delete(CRUD)',
        demoLink: 'https://ciraganenicole.github.io/Portfolio/',
        source: 'https://github.com/ciraganenicole/To-do-list',
    }
};

const project4 = {
    imageSrc: vehicle,
    titre: 'Vehicle-reservation app',
    technolgies: ['Html', 'Css', 'JavaScript'],
    id: 'thirdProject',
    popupDescription: {
        imageSrc: vehicle,
        titre: 'Vehicle-reservation app',
        technolgies: ['Html', 'Css', 'JavaScript'],
        description: 'Vehicle Reservation application is a simple web application being built to track vehicle information with reserve, like and comment features.',
        demoLink: 'https://wuletawwonte.github.io/vehicle-reservation-app/',
        source: 'https://github.com/wuletawwonte/vehicle-reservation-app',
    }
};

const project5 = {
    imageSrc: calculator,
    titre: 'Math magician',
    technolgies: ['Css', 'JavaScript', 'React'],
    id: 'thirdProject',
    popupDescription: {
        imageSrc: calculator,
        titre: 'Math magician',
        technolgies: ['Css', 'JavaScript', 'React'],
        description: 'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users make simple calculations and read a random math-related quote',
        demoLink: 'https://microverse-math-magician.netlify.app/',
        source: 'https://github.com/ciraganenicole/Math-magician',
    }
};

const projects = [project1, project2, project3, project4, project5];

export default projects;