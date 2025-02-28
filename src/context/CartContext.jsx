import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
	//aca va la lógica
	const [cart, setCart] = useState([]);
	
	const addToCart = (product) => {
    //  verifico si ya esta en el carrito
		let isInCart = cart.some((elemento) => elemento.id === product.id);
		if (isInCart) {
		cart.map(elemento => {
			if(elemento.id === product.id){
				elemento.quantity = elemento.quantity + product.quantity;
			}
			return elemento;
		});
		} else {
		setCart([...cart, product]); //mantengo la información y le agrego el nuevo producto	
		}
	};

	const removeCart= () => {
		setCart([]);
	}

	const removeId = (id) => {
		let nuevoArray = cart.filter(elemento => elemento.id !== id); //va a guardar todos los productos menos el del id seleccionado.
		setCart(nuevoArray);
	}

	const getTotal = () => {
		let total = cart.reduce((suma, elemento)=> {
			return suma + elemento.price * elemento.quantity;
		}, 0);
		return total;
	}

	const getTotalItems = () => {
		let totalItems = cart.reduce ((suma, elemento) =>{
			return suma + elemento.quantity;
		}, 0);
		return totalItems;
	}

	let data = { cart, addToCart, removeCart, removeId, getTotal, getTotalItems };

	return (
		<CartContext.Provider value={ data}>{children}</CartContext.Provider>
	);
};
