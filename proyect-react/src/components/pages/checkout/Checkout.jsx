import "./chekout.css";
import { useState } from "react";

const Checkout = () => {
	const [userInfo, SetUserInfo] = useState({
		nombre: "",
		telefono: "",
		email: "",
	});

	const comprar = (event) => {
		event.preventDefault();
	};
	const capturarDatos = (event) => {
		const { value, name } = event.target;
		console.log(value, name);
		SetUserInfo({ ...userInfo, [name]: value });
	};

	return (
		<div>
			<h2>Formulario de compras</h2>
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
		</div>
	);
};

export default Checkout;
