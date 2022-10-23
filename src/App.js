import './App.css';
import Home from './Pages/Home';
import Company from './Pages/Company';
import Cart from './Pages/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ContainerOutsideExample from './Components/Navbar';
// DRY: Do not repeat yourself
function App() {
  return (
    <div className='App'>
     <BrowserRouter>
        <ContainerOutsideExample/>  
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/cart' element={<Cart/>}  />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
