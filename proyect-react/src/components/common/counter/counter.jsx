import { useState } from "react";
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
			<button onClick={sumar}>Sumar</button>
			<h2>contador: {contador}</h2>
			<button onClick={restar}>Restar</button>
		</div>
	);
};
