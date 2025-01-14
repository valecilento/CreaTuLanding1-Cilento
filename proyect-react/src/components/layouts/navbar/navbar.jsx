import "./navbar.css";
import logo from "../../../assets/imagenes/logo.png";
import { CartWidget } from "../../common/cartWidget/cartWidget";

export const Navbar = () => {
	return (
		<nav className="navbar-container">
			<img src={logo} alt="" className="logo"></img>
			<ul className="container-li">
				<li>Todos los productos</li>
				<li>Invierno</li>
				<li>Verano</li>
			</ul>
			<CartWidget />
		</nav>
	);
};
