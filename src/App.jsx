
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import ContainerCardItems from './components/ContainerCardItems';

function App() {
  
  return (
    <div>
      <Navbar/>
      <ItemListContainer Saludos={"Bienvenidos A La Casa Del Futbol!"}/>
      <ContainerCardItems/>
    </div>
  )
}

export default App

