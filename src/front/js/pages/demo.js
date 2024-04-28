import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/demo.css";

import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
		<div className="container">
			<h3>HELLO, PLEASE SignUp</h3>
			</div>
	<div className="test"><h1>To test login</h1><br></br>
	email: rosa1@test.com<br></br>
	password: 123
	</div>	
		</>
		
	);
};
