import "./welcome.css";
export const Welcome = (props) => {
	return (
		<div className="bienvenida">
			<h1>Bienvenido, {props.name}!</h1>
		</div>
	);
};
