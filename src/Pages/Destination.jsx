import { useState, useEffect } from "react";
import PageLayout from "../Components/Pagelayout/PageLayout";
import Button from "../Components/Button";

import destinationBackgroundMobile from '../starter-code/assets/destination/background-destination-mobile.jpg';
import destinationBackgroundTablet from '../starter-code/assets/destination/background-destination-tablet.jpg';
import destinationBackgroundWeb from '../starter-code/assets/destination/background-destination-desktop.jpg';


const Destination = () => {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches);
    

    useEffect(() => {
        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setMatches( e.matches ));
        return () => window.removeEventListener('change', setMatches)
      }, []);
      
    const backgroundImage1 = destinationBackgroundMobile;

    const backgroundImage2 = destinationBackgroundTablet;

    const backgroundImage3 = destinationBackgroundWeb;
    return ( 
        <>
            <PageLayout {...matches && {backgroundImage: backgroundImage3}}{...!matches && {backgroundImage:backgroundImage2}} >

                <div >
                    <h5>SO, YOU WANT TO TRAVEL TO</h5>
                    <h1>Destination</h1>
                    <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>

                <div >
                    <Button buttonText='Explore'/>
                </div>

            </PageLayout>
        </>
     );
}
 
export default Destination;