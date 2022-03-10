import React from "react";

function newInput(props) {
	return (
		<>	
			<label htmlFor={props.id}>{props.label}</label>
			<input
				name={props.name}
				id={props.id}
				type={props.type}
				placeholder={props.label}
				value={props.value}
				onChange={props.onChange}
				required={props.required}
			/>
		</>
	);
}

export default newInput;