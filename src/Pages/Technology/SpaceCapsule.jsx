import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import PageLayout from "../../Components/Pagelayout/PageLayout";

import TechnologyLayout from "./TechnologyLayout";


import capsuleMobile from '../../starter-code/assets/technology/image-space-capsule-landscape.jpg';
import capsuleWeb from '../../starter-code/assets/technology/image-space-capsule-portrait.jpg';



const SpaceCapsule = () => {
    return ( 
            <>
                    <TechnologyLayout techText={`A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings.Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`} 
                
                    techImageMobile={capsuleMobile} techImageWeb={capsuleWeb}
                     techTitle={`space capsule`}/>
            </>

     );
}
 
export default SpaceCapsule;