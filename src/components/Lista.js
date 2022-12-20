import Producto from "./Producto";

const Lista = function ({ list }) {
  return list.map(({ nombre, descripcion, descripcionCorta, imagen, precio }) => (
    <Producto key={nombre} nombre={nombre} descripcion={descripcion} descripcionCorta={descripcionCorta} imagen={imagen} precio={precio} />
  ));
};

export default Lista;
