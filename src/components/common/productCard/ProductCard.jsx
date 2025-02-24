import { Link } from "react-router";
{/*import { Counter } from "../counter/Counter";*/}
import "./productCard.css";
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	Button,
} from "@mui/material";


export const ProductCard = ({ imageUrl, title, price, description, id }) => {
	return (
		<Card className="container-productCard">
			<CardMedia sx={{ height: 100, width: 100 }} image={imageUrl} alt="" />
			<CardContent>
				<Typography>{title}</Typography>
				<Typography>{price}</Typography>
				<Typography>{description}</Typography>
			</CardContent>
			<Link to={`/detail/${id}`}>
				<Button size="small" variant="contained">
					Ver detalle
				</Button>
			</Link>
			{/*<Counter/>*/}
		</Card>
	);
};
