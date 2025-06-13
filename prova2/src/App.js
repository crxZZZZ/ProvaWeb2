import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Galeria from './pages/Galeria';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
        <header>
          <div className="ElementosHeader">
              <a className="Logo">PetFinder</a>
              
                <nav className="LinksHeader">
                  <div className="Link1">
                    <Link to='/'>Home</Link>
                  </div> 
                  <div className="Link2">
                    <Link to='/Galeria'>Galeria</Link>
                  </div>
                </nav>
              
          </div>
        </header>

        <Routes>
          <Route path='/Galeria' element={<Galeria/>} />
          <Route path='/' element={<Home />} />
      </Routes>



    </div>
  );
}

export default App;