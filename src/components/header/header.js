import React from "react";
import data from './data'

const Header = () => {
return (
 <header>
  <h1>
   Ciragane Nicole
  </h1>

  <ul>
   {data.map(({id, name, url}) => (
    <li>
     <a href={url} id={id}>{name}</a>
     </li>
   ))}
  </ul>
 </header>
)
}

export default Header;
