import './App.css';
import ItemListContainer from './ItemListContainer';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import data from './ProductosData.json';
import CardDesc from './components/CardDesc';
import Lista from "./components/Lista";
import { Link, Navigate, Route, Routes } from 'react-router-dom';

const App = function() {
  const {armaduras, armas, anillos} = data;
  return (
    <div className="App">
    <Navbar className='bg-primary'>
      <Container fluid>
          <Link to="/">
            <Navbar.Brand href="#home">Tienda de Donaciones</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Novedades</Nav.Link>
              <NavDropdown title="Objetos" id="basic-nav-dropdown">
                <Link to="/armaduras">
                  <NavDropdown.Item href="#action/3.1">Armaduras</NavDropdown.Item>
                </Link>
                <Link to="/armas">
                  <NavDropdown.Item href="#action/3.2">Armas</NavDropdown.Item>
                </Link>
                <Link to="/anillos">
                  <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Vip</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
        <ItemListContainer saludo={"Bienvenido!"}/>
        <ul>
          <Routes>
            <Route path="/armaduras" element={<Lista list={armaduras} />} />
            <Route path="/armaduras/:nombre" element={<CardDesc data={data} />} />
            <Route path="/armas" element={<Lista list={armas} />} />
            <Route path="/armas/:nombre" element={<CardDesc data={data} />} />
            <Route path="/anillos" element={<Lista list={anillos} />} />
            <Route path="/armas/:nombre" element={<CardDesc data={data} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </ul>
    </div>
  );
}

export default App;
