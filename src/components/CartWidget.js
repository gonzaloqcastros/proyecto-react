import "./CartWidget.css"

const CartWidget = () => {
    return (
    <div className="cart-container">
        <img className="cart-icon" src="../../cart.png" alt="cart-icon"/>
        <p className="cart-number">10</p>

    </div>)
};

export default CartWidget;