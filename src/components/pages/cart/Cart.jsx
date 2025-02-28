import { useContext } from "react";
import "./cart.css";
import { Link } from "react-router";
import { CartContext } from "../../../context/CartContext";
import { Button } from "@mui/material";

const Cart = () => {
	const { cart, removeCart, removeId, getTotal} = useContext(CartContext);
	let total = getTotal();

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
						<h2>Stock disponible: {product.stock}</h2>
						<Button onClick={() => removeId(product.id)}>Eliminar </Button>
					</div>
				);
			})}
			<div className="info-carrito">
				{cart== 0 ? <h2>El carrito está vacío</h2>: (<Button onClick={removeCart}>Vaciar Carrito</Button> &&
				<h3 className="total-carrito">El total a pagar es: {total} </h3>) }
				{cart.length > 0 && (<Link to="/Checkout" className="link-finalizaCompra">
					{" "}
					Finalizar compra{" "}
				</Link>)}
				
			</div>
		</div>
	);
};

export default Cart;
