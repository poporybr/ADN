import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/index.js';
import { About } from './pages/about/index.js';
import { Products } from './pages/products';
import { Contact } from './pages/contact';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route path='/products' Component={Products}/>
        <Route path='/about' Component={About}/>
        <Route path='/contact' Component={Contact}/>
      </Routes>
    </Router>
  );
}

export default App;
