import { products } from "../../../products";
import { ProductCard } from "../../common/productCard/ProductCard";
import { useEffect, useState } from "react";
import { Welcome } from "../../common/welcome/Welcome";
import "./itemListContainer.css";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
	const [items, setItems] = useState([]);
	const { name } = useParams();

	useEffect(() => {
		let productsFiltered;
		if (name) {
			productsFiltered = products.filter(
				(elemento) => elemento.category === name
			);
		}
		const getProducts = new Promise((resolve, reject) => {
			const isLogged = true;
			if (isLogged) {
				resolve(!name ? products : productsFiltered);
			} else {
				reject({ statusCode: 400, message: "algo salió mal" });
			}
		});
		getProducts
			.then((response) => {
				setItems(response);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [name]);

	return (
		<div>
			<Welcome name="Profesor" />
			<h2>Productos de la tienda:</h2>
			<div>
				<div className="tarjetas">
					<div className="tarjetas-producto">
						{items.map((elemento) => {
							return <ProductCard key={elemento.id} {...elemento} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemListContainer;
