import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import PageLayout from "../../Components/Pagelayout/PageLayout";


import technologyBackgroundMobile from '../../starter-code/assets/technology/background-technology-mobile.jpg';
import technologyBackgroundTablet from '../../starter-code/assets/technology/background-technology-tablet.jpg';
import technologyBackgroundWeb from '../../starter-code/assets/technology/background-technology-desktop.jpg';

import lauchMobile from '../../starter-code/assets/technology/image-launch-vehicle-landscape.jpg';
import lauchWeb from '../../starter-code/assets/technology/image-launch-vehicle-portrait.jpg';




const techs = [
    {url: "/technology/", number: '1'},
     {url: "/technology/spaceport", number: '2'},
     {url: "/technology/spacecapsule", number: '3'}
 ];

const TechnologyLayout = ({techImageWeb, techImageMobile, techText, techTitle}) => {

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches);

    

    useEffect(() => {
        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setMatches( e.matches ));
        return () => window.removeEventListener('change', setMatches)
      }, []);

    const backgroundImage1 = technologyBackgroundMobile;

    const backgroundImage2 = technologyBackgroundTablet;

    const backgroundImage3 = technologyBackgroundWeb;

    return ( 

        <>

            <PageLayout {...matches && {backgroundImage: backgroundImage3}}{...!matches && {backgroundImage:backgroundImage2}} >

            
            <div className="container-tech">
                    <div className="tech-text" >

                        <div className="tech-col-1">
                            <h5 className="tech-h5"><span>01</span>space launch 101</h5>

                            <div className=" tech-image-mobile">
                            <img src={techImageMobile} alt={techTitle}/> 

                            </div>

                            <div className="tech-flex">
                                <ul className="tech-navigation">
                                {techs.map((tech, index)=>
                                    <li key={index}><Link to={tech.url}>{tech.number}</Link></li>
                                )}
                            
                                </ul>

                                <div className="tech-details">
                                    <h6>The terminology...</h6>
                                    <h3 className="tech-h3">{techTitle}</h3>
                                    <p>{techText}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="tech-col-2">
                            <img src={techImageWeb} alt={techTitle}/> 

                        </div>
                    </div>
                

                </div>
            </PageLayout>
        
        </>
     );
}
 
export default TechnologyLayout;