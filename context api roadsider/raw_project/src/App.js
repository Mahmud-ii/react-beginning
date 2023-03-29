import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CartPage from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <div className="App">
      <Routes>
          <Route path='/' element={<Home />} exact/>
          <Route path='/cart' element={<CartPage />}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
