import NavBar from "../Nav/NavBar";

const PageLayout = ({children, backgroundImage}) => {

    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})` 
    };
    return ( 
    <div style={backgroundStyle}>
        <NavBar/>
    <main >
        
        <div >
            {children}
        </div>

    </main> 

    </div>
    
);
}
 
export default PageLayout;