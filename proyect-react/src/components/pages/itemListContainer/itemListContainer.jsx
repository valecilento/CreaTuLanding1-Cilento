import { ProductCard } from "../../common/productCard/ProductCard";
import { Welcome } from "../../common/welcome/welcome";

const ItemListContainer = () => {
	return (
		<div>
			<Welcome name="Profesor" />
			<h2>Productos de la tienda:</h2>
			<ProductCard
				titulo="Ropa"
				precio="$00.00"
				descripcion="Diseñada en algodon de calidad."
			/>
			<ProductCard
				titulo="Ropa"
				precio="$00.00"
				descripcion="Diseñada en algodon de calidad."
			/>
			<ProductCard
				titulo="Ropa"
				precio="$00.00"
				descripcion="Diseñada en algodon de calidad."
			/>
			<ProductCard
				titulo="Ropa"
				precio="$00.00"
				descripcion="Diseñada en algodon de calidad."
			/>
		</div>
	);
};

export default ItemListContainer;
