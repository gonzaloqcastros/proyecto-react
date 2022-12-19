import "./ItemListContainer.css"
import Cards from "./components/Card";

function ItemListContainer({saludo, items}) {
    return (
        <div className="ItemListContainer">
            <h1> {saludo}</h1>
            <h2> Objetos Vip </h2>
            <p>{items}</p>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
        </div>
    );
}

export default ItemListContainer;