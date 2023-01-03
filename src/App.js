import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Talleres from './pages/Talleres';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Menu from "./components/Menu";

class App extends React.Component { // eslint-disable-line

  render() {
    return (
        <Router>
          <div>
            <Menu />
            <Routes>
              <Route exact path="/talleres" element={<Talleres />} />
              <Route exact path="/teatro-desde-la-nada" element={<Home />} />
              <Route exact path="/contacto" element={<Contacto />} />
            </Routes>
          </div>
        </Router>
    );
  }
}

export default App;