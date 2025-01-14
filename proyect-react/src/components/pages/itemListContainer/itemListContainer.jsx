import { ProductCard } from "../../common/productCard/ProductCard";
import { Welcome } from "../../common/welcome/welcome";
import "./itemListContainer.css";

const ItemListContainer = () => {
	return (
		<div>
			<Welcome name="Profesor" />
			<h2>Productos de la tienda:</h2>
			<div className="tarjetas">
				<div className="tarjetas-producto">
					<ProductCard
						titulo="Ropa"
						precio="$00.00"
						descripcion="Diseñada en algodon de calidad."
					/>
				</div>
				<div className="tarjetas-producto">
					<ProductCard
						titulo="Ropa"
						precio="$00.00"
						descripcion="Diseñada en algodon de calidad."
					/>
				</div>
				<div className="tarjetas-producto">
					<ProductCard
						titulo="Ropa"
						precio="$00.00"
						descripcion="Diseñada en algodon de calidad."
					/>
				</div>
				<div className="tarjetas-producto">
					<ProductCard
						titulo="Ropa"
						precio="$00.00"
						descripcion="Diseñada en algodon de calidad."
					/>
				</div>
				<div className="tarjetas-producto">
					<ProductCard
						titulo="Ropa"
						precio="$00.00"
						descripcion="Diseñada en algodon de calidad."
					/>
				</div>
				<div className="tarjetas-producto">
					<ProductCard
						titulo="Ropa"
						precio="$00.00"
						descripcion="Diseñada en algodon de calidad."
					/>
				</div>
			</div>
		</div>
	);
};

export default ItemListContainer;
