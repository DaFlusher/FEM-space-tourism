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
    </main> 

    </div>
    
);
}
 
export default PageLayout;