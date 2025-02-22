import "./itemDetail.css";
import { useEffect, useState } from "react";
import { products } from "../../../products";
import { useParams } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Counter } from "../../common/counter/Counter";

const ItemDetail = () => {
	const [item, setItem] = useState({});

	const { id } = useParams();

	useEffect(() => {
		let productSelected = products.find((product) => product.id === id);
		setItem(productSelected);
	}, [id]);

	return (
		<div className="container-productDetail">
			<Card>
				<CardMedia
					sx={{ height: 300, width: 300 }}
					image={item.imageUrl}
					component="img"
					alt=""
				/>
				<CardContent>
					<b>{item.title}</b>
					<Typography>{item.price}</Typography>
					<Typography>{item.description}</Typography>
					<Counter item={item}/>
				</CardContent>
			</Card>
		</div>
	);
};

export default ItemDetail;
