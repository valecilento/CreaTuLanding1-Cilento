import "./cartWidget.css";
import { IconButton, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge, { badgeClasses } from "@mui/material/Badge";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export function CartWidget() {
	const { getTotalItems } = useContext(CartContext);

	let total = getTotalItems();

	const CartBadge = styled(Badge)`
	& .${badgeClasses.badge} {
		top: -16px;
	}
`;
	return (
		<Link to="/cart">
			<IconButton className="icono-carrito">
				<ShoppingCartIcon fontSize="small" />
				<CartBadge
					badgeContent={total} 
					color="primary"
					overlap="circular"
				/>
			</IconButton>
		</Link>
	);
}
