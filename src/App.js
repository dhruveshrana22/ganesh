import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Changed Router alias for better readability

import Home from './app/Screen/Home';
import ProductForm from './app/Screen/Addroduct/Addproduct';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/AddProducts" element={<ProductForm />} />
      </Routes>
    </div>
  );
}


export default App;
