import { CartContext } from "../../../context/CartContext";
import "./chekout.css";
import { useContext, useState } from "react";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, doc, updateDoc} from "firebase/firestore";

const Checkout = () => {
	const {cart, getTotal,removeCart} = useContext(CartContext);
	const [ticket, setTicket] = useState(null);
	const [userInfo, SetUserInfo] = useState({
		nombre: "",
		telefono: "",
		email: "",
	});

	const comprar = (event) => {
		event.preventDefault();
		let total = getTotal();
		let order = {
			buyer: userInfo,
			items: cart,
			total,
		};

		let ordersCollection = collection(db, "orders");
		const newOrder = addDoc(ordersCollection, order);
		newOrder.then((res) => {
			setTicket(res.id);
			removeCart();
		});

		let productsCollection = collection(db, "products");

		order.items.forEach((elemento) => {
			let refDoc = doc(productsCollection, elemento.id);
			updateDoc(refDoc, {stock: elemento.stock - elemento.quantity});
		});
	};

	const capturarDatos = (event) => {
		const { value, name } = event.target;
		SetUserInfo({ ...userInfo, [name]: value });
	};

	return (
		<div>
			<h2>Formulario de compras</h2>
			{ticket ? (
				<h2>Compra realizada con éxito. Su número de orden es: {ticket}</h2>
			): (
				<form onSubmit={comprar} className="formulario">
					<input
						type="text"
						placeholder="nombre"
						name="nombre"
						onChange={capturarDatos}
					/>
					<input
						type="text"
						placeholder="telefono"
						name="telefono"
						onChange={capturarDatos}
					/>
					<input
						type="text"
						placeholder="email"
						name="email"
						onChange={capturarDatos}
					/>
					<button className="boton-comprar">Comprar</button>
				</form>
			)}
		</div>
	);
}

export default Checkout;
