import "./cartWidget.css";
import { IconButton, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge, { badgeClasses } from "@mui/material/Badge";
import { Link } from "react-router-dom";

const CartBadge = styled(Badge)`
	& .${badgeClasses.badge} {
		top: -16px;
	}
`;
export function CartWidget() {
	return (
		<Link to="/cart">
			<IconButton className="icono-carrito">
				<ShoppingCartIcon fontSize="small" />
				<CartBadge badgeContent={1} color="primary" overlap="circular" />
			</IconButton>
		</Link>
	);
}
