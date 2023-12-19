import { useState, useEffect } from "react";
import PageLayout from "../../Components/Pagelayout/PageLayout";
import Button from "../../Components/Button/Button";
import CrewLayout from "./CrewLayout";
import crewBackgroundMobile from '../../starter-code/assets/crew/background-crew-mobile.jpg';
import crewBackgroundTablet from '../../starter-code/assets/crew/background-crew-tablet.jpg';
import crewBackgroundWeb from '../../starter-code/assets/crew/background-crew-desktop.jpg';
import victor from '../../starter-code/assets/crew/image-victor-glover.webp';

const Victor = () => {
    return ( 
        <>
            <CrewLayout name={`Victor Glover`} occupation={`pilot`} crewBio={`Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the US. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. `} crewImage={victor}/>
        </>
     );
}
 
export default Victor;