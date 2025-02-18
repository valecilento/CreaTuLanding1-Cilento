import { Navbar } from "./components/layouts/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemlistContainer from "./components/pages/itemListContainer/ItemListContainer";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";
import Cart from "./components/pages/cart/Cart";
import Checkout from "./components/pages/checkout/Checkout";
import { CartContextProvider } from "./context/CartContext";

function App() {
	return (
		<BrowserRouter>
			<CartContextProvider>
				<Navbar />
				<Routes>
					<Route path="/" element={<ItemlistContainer />} />
					<Route path="/category/:name" element={<ItemlistContainer />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/detail/:id" element={<ItemDetail />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="*" element={<h1>404 not found</h1>} />
				</Routes>
			</CartContextProvider>
		</BrowserRouter>
	);
}

export default App;
