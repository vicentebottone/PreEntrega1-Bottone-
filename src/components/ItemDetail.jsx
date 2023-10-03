import Image from "./image";
import Description from "./description";
import ButtonDetalles from "./ButtonDetalles";
import ButtonAddCart from "./ButtonAddCart";
import "../App.css";


const CardItem = (productos) => {
    return (
        <div className="cardItem" >
            <Image imagen={productos.imagen} />
            <Description 
            titulo= {productos.titulo} 
            Description= {productos.Description}
            cantidad={productos.cantidad} 
            precio={productos.precio}
            />
            <div className="containerButtons">
                <ButtonDetalles/>
                <ButtonAddCart/>
            </div>
           

        </div>
    )
}

export default CardItem;