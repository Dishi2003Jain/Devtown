import './App.css';
import { Routes, Route, BrowserRouter , Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Productdetail from './components/Productdetail';
import Cart from './components/Cart';
function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Navigate to="/login" />}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/product/:id" element={<Productdetail/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
