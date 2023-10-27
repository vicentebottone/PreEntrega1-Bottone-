import deleteWhite from "../assets/delete.svg";
import { useContext } from "react";
import { listCartContext } from "./ProviderContextCart";

const ItemCart = ({ id, titulo, imageProduct, precio, cantidad }) => {
  const { removeFromCart } = useContext(listCartContext);

  return (
    <div className="itemCart">
      <div className="img">
        <img src={imageProduct} alt={titulo} />
      </div>

      <div className="description-cantidad">
        <span className="title"> {titulo} </span>
        <span className="quantity"> {`cantidad: ${cantidad}` } </span>
      </div>

      <div className="price">
        <span className="subtotal">Subtotal</span>
        <span className="price"> ${precio * cantidad} </span>
      </div>

      <button className="delete" onClick={() => removeFromCart(id)}>
        <img src={deleteWhite} alt="Eliminar" />
      </button>
    </div>
  );
};

export default ItemCart;
