import "./itemDetail.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Counter } from "../../common/counter/Counter";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetail = () => {
	const [item, setItem] = useState({});

	const { id } = useParams();

	useEffect(() => {
		let productsCollection = collection(db, "products");
		let productRef = doc(productsCollection, id);
		const getProduct = getDoc(productRef);
		getProduct.then((res)=> setItem ({...res.data(), id: res.id})).catch((error) => console.log(error));
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
