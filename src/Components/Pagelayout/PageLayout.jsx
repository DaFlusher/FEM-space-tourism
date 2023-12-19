import Footer from "../Footer/Footer";
import NavBar from "../Nav/NavBar";


const PageLayout = ({children, backgroundImage}) => {

    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})` 
    };
    return ( 
    <div style={backgroundStyle}>
        <NavBar/>
    <main>
         {children}

         <Footer/>
    </main> 

   

    </div>
    
);
}
 
export default PageLayout;