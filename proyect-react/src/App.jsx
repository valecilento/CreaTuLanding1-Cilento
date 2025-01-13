import { ProductCard } from "./components/common/productCard/ProductCard";
import { Navbar } from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
function App() {
	return (
		<div>
			<Navbar />
			<ItemListContainer />
			<ProductCard />
		</div>
	);
}

export default App;
