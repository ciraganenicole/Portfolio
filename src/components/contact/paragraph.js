import React from 'react';
import { FiMail } from "react-icons/fi";
import { ImLocation2 } from "react-icons/im";
import { FaPhone } from "react-icons/fa";

const Paragraph = () => {
    return ( 
        <div className="text-2xl font-medium md:w-2/5 text-primary h-full text-start mb-10 xl:text-3xl xl:font-semibold">
        <p>I'm always interested in building new interesting projects, open to all kinds of discussions, and happy to meet people, feel free to reach out to me or hire me.</p>
        <ul>
            <li className="flex mt-6">
                < ImLocation2 className=" mr-4 "/>
                <p className="text-base xl:text-xl">Goma, Democratic Republic of Congo</p> 
            </li>
            <li className="flex mt-2">
                < FiMail className=" mr-4 "/>
                <a href="mailto:ciraganenicole@gmail.com" className="text-base xl:text-xl">ciraganenicole@gmail.com</a> 
            </li>
            <li className="flex mt-2">
                < FaPhone className=" mr-4 "/>
                <p className="text-base xl:text-xl">(+243) 991245278</p> 
            </li>
        </ul>
    </div>
    )
}

export default Paragraph;