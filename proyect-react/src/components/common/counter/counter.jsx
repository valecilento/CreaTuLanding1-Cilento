import { useState } from "react";
import "./counter.css";
import { Button, Stack } from "@mui/material";

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
			</Stack>
			<h2 className="contador-boton">Cantidad: {contador}</h2>
		</div>
	);
};
