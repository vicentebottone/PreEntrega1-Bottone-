import ItemListContainer from '../ItemListContainer';
import Navbar from '../Navbar';
import ContainerCardItems from '../ContainerCardItems';

function productos() {
  
  return (
    <div>
      <Navbar/>
      <ItemListContainer Saludos={"Conoce Nuestros Productos!"}/>
      <ContainerCardItems/>
    </div>
  )
}

export default productos;