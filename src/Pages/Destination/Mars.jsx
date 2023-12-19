import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import PageLayout from "../../Components/Pagelayout/PageLayout";

import mars from '../../starter-code/assets/destination/image-mars.webp';
import europa from '../../starter-code/assets/destination/image-europa.webp';
import titan from '../../starter-code/assets/destination/image-titan.webp';
import DestinationLayout from "./DestinationLayout";



const Mars = () => {
    return (
        <>
            <DestinationLayout planetImage={mars} planet={'MARS'} planetText={`Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
            the tallest planetary mountain in our solar system. It’s two and a half times 
            the size of Everest!`}  
            avgDistance={`avg. distance`} 
            distance={`225 mil. km`} 
            estTime={`est. travel time`} 
            time={`9 months`}/>
       
        </>
    );
}
 
export default Mars;