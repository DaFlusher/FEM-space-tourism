import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import PageLayout from "../../Components/Pagelayout/PageLayout";

import destinationBackgroundMobile from '../../starter-code/assets/destination/background-destination-mobile.jpg';
import destinationBackgroundTablet from '../../starter-code/assets/destination/background-destination-tablet.jpg';
import destinationBackgroundWeb from '../../starter-code/assets/destination/background-destination-desktop.jpg';

const destinations = [
    {url: "/destination/", title: 'Moon'},
     {url: "/destination/mars", title: 'Mars'},
     {url: "/destination/europa", title: 'Europa'},
     {url: "/destination/titan", title: 'Titan'}
 ];

const DestinationLayout = ({ planetImage, planet, planetText, estTime, time, avgDistance, distance}) => {

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
            <div className="section-two">
                <PageLayout {...matches && {backgroundImage: backgroundImage3}}{...!matches && {backgroundImage:backgroundImage2}} >

                <div className="container-destination">
                    <div className="destination-text" >

                        <div className="destination-col-1">
                            <h5 className="destination-h5"><span>01</span>Pick your destination</h5>

                            <div className="planet-image">
                                <img src={planetImage} alt={planet}/> 
                            </div>
                        </div>
                        
                        <div className="destination-col-2">
                            <ul className="destination-navigation">
                                {destinations.map((destination, index)=>
                                    <li key={index}><Link to={destination.url}>{destination.title}</Link></li>
                                )}
                            
                            </ul>
                            <h3 className="destination-h3">{planet}</h3>
                            <p>{planetText}</p>
                            

                            <div className="logistics">
                                <span>{avgDistance}
                                
                                <strong>{distance}</strong>
                                </span>

                                <span>{estTime}
                                
                                <strong>{time}</strong>
                                </span>
                            </div>
                        </div>
                        
                        
                    </div>


                </div>
                
                </PageLayout>
            </div>
           
        </>
     );
}
 
export default DestinationLayout;