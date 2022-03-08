import React from "react";

function newInput(props) {
	return (
		<>
			<input
				name={props.name}
				type={props.type}
				placeholder={props.label}
				value={props.value}
				onChange={props.onChange}
			/>
		</>
	);
}

export default newInput;