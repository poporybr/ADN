import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/index.js';
import { About } from './pages/about/index.js';
import { Products } from './pages/products/index.js';
import { Contact } from './pages/contact/index.js';
import { Start } from './pages/start/index.js'



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route path='/products' Component={Products}/>
        <Route path='/about' Component={About}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/start' Component={Start}/>
      </Routes>
    </Router>
  );
}

export default App;
