import "./NavBar.css"
import CartWidget from "./CartWidget";

const NavBar = () => {
    return <div className="navbar-container">
                <h2>Tienda de Donaciones</h2>
                <button className= "button-navbar">Armaduras</button>
                <button className= "button-navbar">Armas</button>
                <button className= "button-navbar">Monturas</button>
                <CartWidget/>
            </div>;
};

export default NavBar