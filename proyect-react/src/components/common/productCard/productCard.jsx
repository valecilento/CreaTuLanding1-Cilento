import { Counter } from "../counter/Counter";
import "./productCard.css";
export const ProductCard = (props) => {
	return (
		<div className="container-productCard">
			<h2>{props.titulo}</h2>
			<h2>{props.precio}</h2>
			<h2>{props.descripcion}</h2>
			<Counter />
		</div>
	);
};
