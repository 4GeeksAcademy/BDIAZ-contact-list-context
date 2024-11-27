import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useNavigate  } from "react-router-dom";
import { Context } from "../store/appContext";
import { Form } from "../component/form.jsx";

export const ContactDetails = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const navigate = useNavigate(); 
    const [isSubmitting, setIsSubmitting] = useState(false);

	const [formValues, setFormValues] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
    });

	useEffect(() => {
        // Si estás en modo edición, precarga los valores del contacto
        if (params.theid && params.theid != 0) {
            const contact = store.contacts.find((contact) => contact.id == params.theid);
            if (contact) {
                setFormValues({
                    name: contact.name || "",
                    phone: contact.phone || "",
                    email: contact.email || "",
                    address: contact.address || "",
                });
            }
        }
    }, [params.theid, store.contacts]);


	const handleChange = (field, value) => {
        setFormValues((prev) => ({ ...prev, [field]: value }));
    };

    const createContact = () => {
		console.log("createContact:",formValues)
        actions.addContact(formValues); // Usa los valores del formulario
        navigate("/"); 
    };

    const updateContact = () => {
		console.log("updateContact:", formValues)
        actions.updateContact(formValues, params.theid); // Usa los valores del formulario
        navigate("/"); 
    };

	if (isSubmitting) {
        navigate("/"); 
    }

	return (
		<div className="container">
			{(params.theid == 0)
			?(
				<>
				<h1 className="text-center">Add Contact</h1>
				<Form values={formValues} onChange={handleChange} />
				<button className="btn btn-primary w-100" onClick={createContact}>Submit</button>
				</>
			):(
				<>
				<h1 className="text-center">Edit Contact</h1>
				<Form values={formValues} onChange={handleChange} />
				<button className="btn btn-primary w-100" onClick={updateContact}>Update</button>
				</>
			)}


			<Link to="/">
				<span className="" href="#" role="button">
					or get back to contacts
				</span>
			</Link>
		</div>
	);
};
