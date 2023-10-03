
import fetchSimulation from "../utils/fetchSimulation";
import productos from "../utils/products";
import { useEffect, useState } from "react";
import CardItem from "./ItemDetail";



const ContainerCardItems = () =>{
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        fetchSimulation(productos, 2000)
        .then(resp => setDatos(resp))
        .catch(err => console.log(err))
    })


   
    
    return(
        <div className="containerCardItems">
        {
            datos.map( (item) => 
                <CardItem
                    key={item.id}
                    imagen={item.imageProduct}
                    titulo={item.titulo}
                    cantidad={item.cantidad}
                    precio={item.precio}
            />
            )}
        </div>

    )
}

export default ContainerCardItems;

