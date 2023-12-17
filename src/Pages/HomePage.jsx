import { useState, useEffect } from "react";

import PageLayout from "../Components/Pagelayout/PageLayout";
import Button from "../Components/Button";
import homeBackgroundMobile from '../starter-code/assets/home/background-home-mobile.jpg';
import homeBackgroundTablet from '../starter-code/assets/home/background-home-tablet.jpg';
import homeBackgroundWeb from '../starter-code/assets/home/background-home-desktop.jpg';


const HomePage = () => {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches);
    

    useEffect(() => {
        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setMatches( e.matches ));
        return () => window.removeEventListener('change', setMatches)
      }, []);
    
      
    const backgroundImage1 = homeBackgroundMobile;

    const backgroundImage2 = homeBackgroundTablet;

    const backgroundImage3 = homeBackgroundWeb;

    return ( 
    <>
        <PageLayout {...matches && {backgroundImage: backgroundImage3}}{...!matches && {backgroundImage:backgroundImage2}} >

            <div >
                <h5>SO, YOU WANT TO TRAVEL TO</h5>
                <h1>space</h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>

            <div >
                <Button buttonText='Explore'/>
            </div>

        </PageLayout>
    </> );
}
 
export default HomePage;