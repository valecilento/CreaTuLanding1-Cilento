import { CartWidget } from "../../common/cartWidget/cartWidget";
import "./navbar.css";
import logo from "../../../assets/imagenes/logo.png";
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
