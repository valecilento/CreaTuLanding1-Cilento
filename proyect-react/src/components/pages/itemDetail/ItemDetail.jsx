import { useEffect, useState } from "react";
import { products } from "../../../products";
import { useParams } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const ItemDetail = () => {
	const [item, setItem] = useState({});

	const { id } = useParams();

	useEffect(() => {
		let productSelected = products.find((product) => product.id === id);
		setItem(productSelected);
	}, [id]);

	return (
		<div>
			<Card className="container-productCard">
				<CardMedia
					sx={{ height: 220, width: 220 }}
					image={item.imageUrl}
					alt=""
				/>
				<CardContent>
					<Typography>{item.title}</Typography>
					<Typography>{item.price}</Typography>
					<Typography>{item.description}</Typography>
				</CardContent>
			</Card>
		</div>
	);
};

export default ItemDetail;
