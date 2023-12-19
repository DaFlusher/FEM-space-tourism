import { useState, useEffect } from "react";
import PageLayout from "../../Components/Pagelayout/PageLayout";
import Button from "../../Components/Button/Button";
import CrewLayout from "./CrewLayout";
import crewBackgroundMobile from '../../starter-code/assets/crew/background-crew-mobile.jpg';
import crewBackgroundTablet from '../../starter-code/assets/crew/background-crew-tablet.jpg';
import crewBackgroundWeb from '../../starter-code/assets/crew/background-crew-desktop.jpg';
import mark from '../../starter-code/assets/crew/image-mark-shuttleworth.webp';


const Mark = () => {
    return ( 
        <>
            <CrewLayout name={`Mark Shuttleworth`} occupation={`Mission Specialist`} crewBio={`Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.`} crewImage={mark}/>
    

        </>
     );
}
 
export default Mark;