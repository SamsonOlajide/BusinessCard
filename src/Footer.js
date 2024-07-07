import React from "react";
import linkedin from './images/linkedin.png';
import github from './images/Github.png';

function Footer(){
    return(
        <footer>
            <div>
                <a href="https://www.linkedin.com/in/samson-olajide-a74847243/" src={linkedin}> <img src={linkedin} alt='here' /> </a>
                <a href="https://github.com/SamsonOlajide" src={github}> <img src={github} alt='here'/></a>
            </div>
        </footer>
    );
}   

export default Footer;