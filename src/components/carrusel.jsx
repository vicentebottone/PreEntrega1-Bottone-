
import productos from '../utils/products';

const Carrusel = () => {
  const imageStyle = {
    maxWidth: '100%', 
    maxHeight: '100%', 
    display: 'block',
    margin: '0 auto',
    objectFit: 'contain',
  };

  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        {productos.map((producto, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img
              src={producto.imageProduct}
              style={imageStyle} 
              alt={producto.titulo}
            />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carrusel;

