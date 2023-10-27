import { useContext, useState } from "react";
import { listCartContext } from "./ProviderContextCart";
import carrito from "../assets/bx-cart.svg";
import ContainerCart from "./ContainerCART.JSX"; // Asume que tienes un componente ContainerCart para mostrar el contenido del carrito

const ButtonAddCart = ({ id }) => {
  const { addProduct } = useContext(listCartContext);
  const [agregado, setAgregado] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleClick = () => {
    if (!agregado) {
      addProduct(id);
      setAgregado(true);
    }
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <button id="AddCart" onClick={handleClick} disabled={agregado}>
        <img src={carrito} width={30} height={30} className="carrito" onClick={toggleCart} />
      </button>
      {isCartOpen && <ContainerCart />}
    </div>
  );
}

export default ButtonAddCart;




