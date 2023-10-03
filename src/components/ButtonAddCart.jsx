import carrito from "../assets/bx-cart.svg"

const ButtonAddCart = () => {
    return (
        <button id="AddCart">
            <img src={carrito} width={30} height={30} className="carrito" id="carrito" onClick={carrito} /> 
        </button>
    )
}

export default ButtonAddCart;