import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import PageLayout from "../../Components/Pagelayout/PageLayout";



import moon from '../../starter-code/assets/destination/image-moon.webp';
import mars from '../../starter-code/assets/destination/image-mars.webp';
import europa from '../../starter-code/assets/destination/image-europa.webp';
import titan from '../../starter-code/assets/destination/image-titan.webp';
import DestinationLayout from "./DestinationLayout";
const Destination = () => {
    
    return ( 
        <>
            <DestinationLayout planetImage={moon} planet={'MOON'} planetText={`See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
            regain perspective and come back refreshed. While you’re there, take in some history 
            by visiting the Luna 2 and Apollo 11 landing sites`}  avgDistance={`avg. distance`} 
            distance={`384,400 km`} 
            estTime={`est. travel time`} 
            time={`3 days`}/>
           
        </>
     );
}
 
export default Destination;