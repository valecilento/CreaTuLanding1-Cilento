import { FaShoppingCart } from "react-icons/fa";
import "./cartWidget.css";

export const CartWidget = () => {
	return (
		<div className="icono-carrito">
			<div className="badge"> 0</div>
			<FaShoppingCart />
		</div>
	);
};
