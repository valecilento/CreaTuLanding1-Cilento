import "./cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
	return (
		<div>
			<h2>Carrito de compras</h2>
			<Link to="/Checkout" className="link-finalizaCompra">
				{" "}
				Finalizar compra{" "}
			</Link>
		</div>
	);
};

export default Cart;
