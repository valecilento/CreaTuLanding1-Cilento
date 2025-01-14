import { useState } from "react";
import "./counter.css";

export const Counter = () => {
	const [contador, setContador] = useState(0);
	const sumar = () => {
		setContador(contador + 1);
	};
	const restar = () => {
		if (contador > 0) {
			setContador(contador - 1);
		}
	};

	return (
		<div>
			<button className="boton" onClick={sumar}>
				Sumar
			</button>
			<button className="boton" onClick={restar}>
				Restar
			</button>
			<h2 className="contador-boton">Cantidad: {contador}</h2>
		</div>
	);
};
