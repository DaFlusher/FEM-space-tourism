import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import PageLayout from "../../Components/Pagelayout/PageLayout";

import TechnologyLayout from "./TechnologyLayout";


import launchMobile from '../../starter-code/assets/technology/image-launch-vehicle-landscape.jpg';
import launchWeb from '../../starter-code/assets/technology/image-launch-vehicle-portrait.jpg';



const Technology = () => {
        return ( 
        <>
                <TechnologyLayout techText={`
                A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`} 
                
                techImageMobile={launchMobile} techImageWeb={launchWeb}
                techTitle={`launch vehicle`}/>
                    
        </>
     );
}
 
export default Technology;