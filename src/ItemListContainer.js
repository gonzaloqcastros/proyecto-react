import "./ItemListContainer.css"
import Card from "./components/Card";

function ItemListContainer({saludo}) {
    return (
        <div className="ItemListContainer">
            <h1> {saludo}</h1>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default ItemListContainer;