
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import PageLayout from "../../Components/Pagelayout/PageLayout";
import Button from "../../Components/Button/Button";

import crewBackgroundMobile from '../../starter-code/assets/crew/background-crew-mobile.jpg';
import crewBackgroundTablet from '../../starter-code/assets/crew/background-crew-tablet.jpg';
import crewBackgroundWeb from '../../starter-code/assets/crew/background-crew-desktop.jpg';

import ansari from '../../starter-code/assets/crew/image-anousheh-ansari.webp';






const crewMembers = [
    {url: "/crew/", number: '1'},
     {url: "/crew/mark", number: '2'},
     {url: "/crew/victor", number: '3'},
     {url: "/crew/ansari", number: '4'}
 ];

const CrewLayout = ({ occupation,name, crewBio, crewImage}) => {

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches);
    

    useEffect(() => {
        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setMatches( e.matches ));
        return () => window.removeEventListener('change', setMatches)
      }, []);

    const backgroundImage1 = crewBackgroundMobile;

    const backgroundImage2 = crewBackgroundTablet;

    const backgroundImage3 = crewBackgroundWeb;

    return ( 

        <>
            <div className="section-three">
                <PageLayout {...matches && {backgroundImage: backgroundImage3}}{...!matches && {backgroundImage:backgroundImage2}} >

                <div className="container-crew">
                    <div className="crew-text" >

                        <div className="crew-col-1">
                            <h5 className="crew-h5"><span>02</span>Meet your crew</h5>
                            
                            <div className="crew-col-2 crew-mobile">
                            
                                <div className="crew-image mobile">
                                    <img src={crewImage} alt={name}/> 
                                </div>  

                                <div className="navigation crew-nav">
                                    <ol className="crew-navigation">
                                    {crewMembers.map((member, index)=>
                                        <li key={index}><Link to={member.url}>{member.number}</Link></li>
                                    )}
                                
                                    </ol>
                                    </div> 

                            </div>
                                <div className="crew-info">
                                <h4>{occupation}</h4>

                                <h3 className="crew-h3">{name}</h3>
                                <p>{crewBio}</p>
                                </div>

                                <div className="navigation crew-web">
                                <ol className="crew-navigation">
                                {crewMembers.map((member, index)=>
                                    <li key={index}><Link to={member.url}>{member.number}</Link></li>
                                )}
                            
                                </ol>
                                </div>  
                            
                            
                            
                        </div>
                        
                        <div className="crew-col-2 crew-web">
                            
                            <div className="crew-image">
                                <img src={crewImage} alt={name}/> 
                            </div>  
                        </div>
                        
                        
                    </div>


                </div>
                
                </PageLayout>
            </div>
        
        </>


     );
}
 
export default CrewLayout;