import "./navbar.css";
import logo from "../../../assets/imagenes/logo.png";
import { CartWidget } from "../../common/cartWidget/cartWidget";
import { Link } from "react-router";

export const Navbar = () => {
	return (
		<nav className="navbar-container">
			<Link to="/">
				<img src={logo} alt="" className="logo"></img>
			</Link>
			<ul className="container-li">
				<Link to="/">Todos los productos</Link>
				<Link to="/category/Invierno">Invierno</Link>
				<Link to="/category/Verano">Verano</Link>
			</ul>
			<CartWidget />
		</nav>
	);
};
