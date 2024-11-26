import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Form } from "../component/form.jsx";

export const ContactDetails = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container">
			<h1 className="text-center">Add Contact</h1>
			<Form />
			<Link to="/">
				<span className="" href="#" role="button">
					or Back home
				</span>
			</Link>
		</div>
	);
};
