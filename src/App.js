import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Changed Router alias for better readability

import Home from './app/Screen/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} /> {/* Corrected 'component' to 'element' */}
      </Routes>
    </div>
  );
}


export default App;
