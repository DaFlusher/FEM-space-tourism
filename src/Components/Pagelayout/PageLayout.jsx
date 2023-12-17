const PageLayout = ({children, backgroundImage}) => {

    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})` 
    };
    return ( 
    
    <main style={backgroundStyle}>
        
        <div >
            {children}
        </div>

    </main> );
}
 
export default PageLayout;