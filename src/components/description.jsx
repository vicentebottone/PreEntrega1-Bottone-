const Description = (props) => {
    return(
        <div className="cardDescription" >
            <h2 className="titulo" >
                {props.titulo}
            </h2>
            <div className="descripcion">
                <span className="descripcionTitulo"></span>
                <p className="parrafo">
                    {props.parrafo}
                </p>
                
                
            </div>
            <span className="cantidad" >
                cantidad: {props.cantidad}
            </span>
            <span className="precio" >
                ${props.precio}
            </span>
        </div>
    )
}

export default Description;