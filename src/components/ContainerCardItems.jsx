
import fetchSimulation from "../utils/fetchSimulation";
import productos from "../utils/products";
import { useEffect, useState } from "react";
import CardItem from "./ItemDetail";


const ContainerCardItems = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetchSimulation(productos, 2000);
        setDatos(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="containerCardItems">
      {datos.map((item) => (
        <CardItem
          key={item.id}
          producto={item}
        />
      ))}
    </div>
  );
};

export default ContainerCardItems;
