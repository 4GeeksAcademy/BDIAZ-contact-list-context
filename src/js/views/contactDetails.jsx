import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useNavigate  } from "react-router-dom";
import { Context } from "../store/appContext";
import { Form } from "../component/form.jsx";

export const ContactDetails = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const navigate = useNavigate(); // Para redirigir
    const [isSubmitting, setIsSubmitting] = useState(false);

	const createContact = () => {
        console.log("newContact:", store.newContact)
        actions.addContact(store.newContact)
		setIsSubmitting(true); 
	}

	if (isSubmitting) {
        navigate("/"); 
    }

	return (
		<div className="container">
			<h1 className="text-center">Add Contact</h1>
			<Form />
			<button className="btn btn-primary w-100" onClick={createContact}>Submit</button>
			<Link to="/">
				<span className="" href="#" role="button">
					or get back to contacts
				</span>
			</Link>
		</div>
	);
};
