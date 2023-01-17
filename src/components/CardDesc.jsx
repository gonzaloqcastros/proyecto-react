import { useLocation, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardDesc = ({ data }) => {
  const { type, nombre } = useParams();
  const productos = data[type];
  const producto = productos.find((producto) => producto.nombre === nombre);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`"./public/${producto.imagen}"`}/>
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>
          {producto.descripcion}
        </Card.Text>
        <Card.Text>
          {producto.precio}
        </Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
};

export default CardDesc;
