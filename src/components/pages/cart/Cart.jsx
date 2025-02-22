import { useContext } from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { Button } from "@mui/material";

const Cart = () => {
	const { cart, removeCart, removeId, getTotal} = useContext(CartContext);
// Comentario dummy para probar git push
	let total = getTotal()

	return (
		<div>
			<h2>Carrito de compras</h2>
			{cart.map((product) => {
				return (
					<div key={product.id} className="container-carrito">
						<h2>{product.title}</h2>
						<img src={product.imageUrl} alt="" className="img-carrito"></img>
						<h2>{product.price}</h2>
						<h2>{product.quantity}</h2>
						<Button onClick={() => removeId(product.id)}>Eliminar </Button>
					</div>
				//Modificar boton css
				);
			})}
			<Button onClick={removeCart} className="button-carrito">Vaciar Carrito</Button>
			<h3>El total a pagar es: {total} </h3>
			<Link to="/Checkout" className="link-finalizaCompra">
				{" "}
				Finalizar compra{" "}
			</Link>
		</div>
	);
};

export default Cart;
