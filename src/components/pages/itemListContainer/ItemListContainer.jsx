import { ProductCard } from "../../common/productCard/ProductCard";
import { useEffect, useState } from "react";
import { Welcome } from "../../common/welcome/Welcome";
import "./itemListContainer.css";
import { useParams } from "react-router";
import { db } from "../../../firebaseConfig";
import{collection, getDocs, query, where} from "firebase/firestore"

const ItemListContainer = () => {
	const [items, setItems] = useState([]);
	const { name } = useParams();

	useEffect(() => {
		let productsCollection = collection(db, "products");
		let consulta = productsCollection;
		if (name){
			let collectionFiltrada = query( productsCollection, where ("category", "==", name))
			consulta = collectionFiltrada;
		
		}
		
		const getProducts = getDocs(consulta);
		getProducts.then((res) => {
			const array = res.docs.map(elemento => {
				return{id: elemento.id, ...elemento.data()}
			})
			setItems(array)
		})
		.catch((error) => console.log(error));
	}, [name]);
	
	return (
		<div>
			<Welcome name="Profesor" />
			<h2>Productos de la tienda:</h2>
			{items.length === 0 ?(  
				<h1>Cargando...</h1>
			) : (
				<div>
				<div className="tarjetas">
					<div className="tarjetas-producto">
						{items.map((elemento) => {
							return <ProductCard key={elemento.id} {...elemento} />;
						})}
					</div>
				</div>
			</div>
			)}
		</div>
	);
};

export default ItemListContainer;
