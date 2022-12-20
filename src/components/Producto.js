import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Producto = function ({nombre, descripcionCorta, imagen, precio}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`"./public/${imagen}"`}/>
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {descripcionCorta}
        </Card.Text>
        <Card.Text>
          {precio}
        </Card.Text>
        <Link to={`${nombre}`}>
            <Button variant="primary">ver más</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Producto;