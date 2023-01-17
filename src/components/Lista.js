import { useParams } from "react-router-dom";
import Producto from "./Producto";



const Lista = function ({ list }) {
  const { type } = useParams();
  const listado = list[type];
  return listado.map(({ nombre, descripcion, descripcionCorta, imagen, precio }) => (
    <Producto key={nombre} nombre={nombre} descripcion={descripcion} descripcionCorta={descripcionCorta} imagen={imagen} precio={precio} />
  ));
};

export default Lista;
