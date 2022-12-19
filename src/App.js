import './App.css';
// import NavBar from './components/NavBar';
import ItemListContainer from './ItemListContainer';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const App = function() {
  return (
    <div className="App">
    <Navbar className='bg-primary'>
      <Container fluid>
          <Navbar.Brand href="#home">Tienda de Donaciones</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Novedades</Nav.Link>
              <NavDropdown title="Objetos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Armaduras</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Armas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Monturas</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Vip</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    
    
        {/* <NavBar/> */}
        <ItemListContainer saludo={"Bienvenido!"}/>
    </div>
  );
}

export default App;
