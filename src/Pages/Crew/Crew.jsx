import { useState, useEffect } from "react";
import PageLayout from "../../Components/Pagelayout/PageLayout";
import Button from "../../Components/Button/Button";
import CrewLayout from "./CrewLayout";
import crewBackgroundMobile from '../../starter-code/assets/crew/background-crew-mobile.jpg';
import crewBackgroundTablet from '../../starter-code/assets/crew/background-crew-tablet.jpg';
import crewBackgroundWeb from '../../starter-code/assets/crew/background-crew-desktop.jpg';
import doug from '../../starter-code/assets/crew/image-douglas-hurley.webp';


const Crew = () => {

    
    return ( 
        <>
            <CrewLayout name={`DOUGLAS HURLEY`} occupation={`Commander`} crewBio={`Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.`} crewImage={doug}/>
        </>
     );
}
 
export default Crew;