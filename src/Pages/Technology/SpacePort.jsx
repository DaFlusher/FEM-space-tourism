import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import PageLayout from "../../Components/Pagelayout/PageLayout";

import TechnologyLayout from "./TechnologyLayout";
import portMobile from '../../starter-code/assets/technology/image-spaceport-landscape.jpg';
import portWeb from '../../starter-code/assets/technology/image-spaceport-portrait.jpg';
const  SpacePort = () => {
    return ( 

        <>
                <TechnologyLayout techText={`A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`} 
                
                techImageMobile={portMobile} techImageWeb={portWeb}
                techTitle={`spaceport`}/>
        </>


     );
}
 
export default  SpacePort;