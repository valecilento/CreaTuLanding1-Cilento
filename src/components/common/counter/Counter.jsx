import { useContext, useState } from "react";
import "./counter.css";
import { Button, Stack } from "@mui/material";
import { CartContext } from "../../../context/CartContext";

export const Counter = ({item}) => {
	
	const [contador, setContador] = useState(1);
	const {addToCart} = useContext(CartContext);
	
	const sumar = () => {  
		if (contador < item.stock) {
			setContador(contador + 1);
		}
	};
	const restar = () => {
		if (contador > 1) {
			setContador(contador - 1);
		}
	};
	const onAdd = () => {
		item.quantity=contador;
		addToCart(item);
	};
	
	return (
		<div>
			<Stack direction="row" spacing={2}>
				<Button
					size="small"
					variant="outlined"
					color="success"
					className="boton"
					onClick={sumar}
				>
					+
				</Button>
				<Button
					size="small"
					variant="outlined"
					color="error"
					className="boton"
					onClick={restar}
				>
					-
				</Button>
				<Button size="small" onClick={onAdd}>Agregar al carrito</Button>
			</Stack>
			<h2 className="contador-boton">Cantidad: {contador}</h2>
		</div>
	);
};
