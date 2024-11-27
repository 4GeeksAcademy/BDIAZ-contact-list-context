import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Form = (props) => {
    const { store, actions } = useContext(Context);
	const [tasks, setTasks] = useState([{label: "No tasks here, add tasks"}]);
	
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

	const getName = (event) => {
        setName(event.target.value)
	}
    const getPhone = (event) => {
        setPhone(event.target.value)
	}
    const getEmail = (event) => {
        setEmail(event.target.value)
	}
    const getAddress = (event) => {
        setAddress(event.target.value)

	}
    const createContact = () => {
        const contact = {
            name: name,
            phone: phone,
            email: email,
            address: address
        };
        console.log("newContact:", contact)
        actions.addContact(contact)
        // CHECAR return <Redirect to='/' />
	}


    return (
        <form>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="name" placeholder="Full Name" onChange={getName}/>
                <label for="name">Full name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={getEmail}/>
                <label for="email">Email</label>
            </div>
            <div className="form-floating mb-3">
                <input type="number" className="form-control" id="phone" placeholder="Password" onChange={getPhone}/>
                <label for="phone">Phone</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="address" placeholder="Password" onChange={getAddress}/>
                <label for="address">Address</label>
            </div>
            <button className="btn btn-primary w-100" onClick={createContact}>Submit</button>
        </form>
    );
};
