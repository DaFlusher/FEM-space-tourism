import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import PageLayout from "../../Components/Pagelayout/PageLayout";

import europa from '../../starter-code/assets/destination/image-europa.webp';
import titan from '../../starter-code/assets/destination/image-titan.webp';
import DestinationLayout from "./DestinationLayout";


const Europa = () => {
    return ( 
        <>
            <DestinationLayout planetImage={europa} planet={'EUROPA'} planetText={`The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`}  
            avgDistance={`avg. distance`} 
            distance={`628 mil. km`} 
            estTime={`est. travel time`} 
            time={`3 years`}/>
       
        </>
        
        
     );
}
 
export default Europa;