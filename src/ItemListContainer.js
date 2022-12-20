import "./ItemListContainer.css"

function ItemListContainer({saludo}) {
    return (
        <div className="ItemListContainer">
            <h1> {saludo}</h1>
        </div>
    );
}

export default ItemListContainer;