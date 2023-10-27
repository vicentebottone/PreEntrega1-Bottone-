
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProviderContextCart from './components/ProviderContextCart';
import Home from './components/pages/home';
import Productos from './components/pages/productos';
import Conocenos from './components/pages/conocenos';

function App() {
  return (
    <ProviderContextCart>
      <BrowserRouter basename='/PreEntrega2-Bottone-/'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/conocenos" element={<Conocenos />} />
      </Routes>
    </BrowserRouter>
    </ProviderContextCart>
    
  );
}

export default App;
