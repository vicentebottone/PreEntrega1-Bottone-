import Image from "./image";
import Description from "./description";
import ButtonDetalles from "./ButtonDetalles";
import ButtonAddCart from "./ButtonAddCart";
import "../App.css";

const CardItem = ({ producto }) => { // Cambia "producto" aquí
  return (
    <div className="cardItem" >
      <Image imagen={producto.imageProduct} />
      <Description 
        titulo={producto.titulo} 
        Description={producto.description}
        cantidad={producto.cantidad} 
        precio={producto.precio}
      />
      <div className="containerButtons">
        <ButtonDetalles/>
        <ButtonAddCart id={producto.id}/>
      </div>
    </div>
  )
}

export default CardItem;
