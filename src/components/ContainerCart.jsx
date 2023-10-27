import { useContext, useState } from 'react';
import { listCartContext } from './ProviderContextCart';
import close from '../assets/close.svg';
import clear from '../assets/trash.svg';
import ItemCart from './ItemCart';

const ContainerCart = () => {
  const { listCart, clearCart } = useContext(listCartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleClearCart = () => {
    clearCart(); // Llama a la función para vaciar el carrito
  };

  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen); // Abre o cierra el carrito
  };

  return (
    <div className={`cart ${isCartOpen ? 'open' : ''}`}>
      <div className="cerrar">
        <button className="close" onClick={handleToggleCart}>
          <img src={close} alt="Cerrar" />
        </button>
      </div>

      <div className="containerItemsCart">
        {listCart.map((product) => (
          <ItemCart key={product.id} {...product} />
        ))}
      </div>

      <div className="TerminarCompra">
        <button className="terminar">Terminar Compra</button>
        <button className="clear" onClick={handleClearCart}>
          <img src={clear} alt="Vaciar carrito" />
        </button>
      </div>
    </div>
  );
};

export default ContainerCart;


