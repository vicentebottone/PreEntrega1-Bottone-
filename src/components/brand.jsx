import ImgLogo from "../assets/imagenprueba.jpg"

const Brand = () => {
    return(
        <div className="navbar-brand">
        <img src={ImgLogo} alt="logo" className="imgLogo" />
        <div className="brand-text">
          <a href="/">La Casa Del Futbol</a>
        </div>
      </div>      
        
    )
        
    
};


export default Brand;