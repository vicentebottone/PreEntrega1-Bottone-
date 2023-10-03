import ImgLogo from "../assets/imagenprueba.jpg"

const Brand = () => {
    return(
        <div className="navbar-brand">
            <img src={ImgLogo} alt="logo" className="imgLogo"/>
            <a className="navbar-brand" href="#">La Casa Del Futbol</a>
        </div>
        
    )
        
    
};


export default Brand;