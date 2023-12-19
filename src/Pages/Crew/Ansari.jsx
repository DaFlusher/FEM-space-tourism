
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import PageLayout from "../../Components/Pagelayout/PageLayout";
import CrewLayout from "./CrewLayout";
import Button from "../../Components/Button/Button";

import crewBackgroundMobile from '../../starter-code/assets/crew/background-crew-mobile.jpg';
import crewBackgroundTablet from '../../starter-code/assets/crew/background-crew-tablet.jpg';
import crewBackgroundWeb from '../../starter-code/assets/crew/background-crew-desktop.jpg';

import ansari from '../../starter-code/assets/crew/image-anousheh-ansari.webp';

const Ansari = () => {
    return ( 
        <>
            <CrewLayout name={`Anousheh Ansari`} occupation={`flight engineer`} crewBio={`Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. `} crewImage={ansari}/>
        </>
     );
}
 
export default Ansari;