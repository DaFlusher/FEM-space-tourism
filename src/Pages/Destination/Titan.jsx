import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import PageLayout from "../../Components/Pagelayout/PageLayout";

import titan from '../../starter-code/assets/destination/image-titan.webp';
import DestinationLayout from "./DestinationLayout";

const Titan = () => {
    return ( 
        <DestinationLayout planetImage={titan} planet={'TITAN'} planetText={`The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`}  
        avgDistance={`avg. distance`} 
        distance={`1.6 bil. km`} 
        estTime={`est. travel time`} 
        time={`7 years`}/>
        
        
     );
}
 
export default Titan;