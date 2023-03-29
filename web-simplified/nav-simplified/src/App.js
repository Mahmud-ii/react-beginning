import { Form } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
