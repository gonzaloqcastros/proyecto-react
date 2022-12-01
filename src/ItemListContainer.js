import "./ItemListContainer.css"
import Cards from "./components/Card";

function ItemListContainer({saludo}) {
    return (
        <div className="ItemListContainer">
            <h1> {saludo}</h1>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
        </div>
    );
}

export default ItemListContainer;