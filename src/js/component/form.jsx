import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";


export const Form = (props) => {
    const { store, actions } = useContext(Context);

	const getName = (event) => {
        store.newContact.name = event.target.value;
	}
    const getPhone = (event) => {
        store.newContact.phone = event.target.value;
	}
    const getEmail = (event) => {
        store.newContact.email = event.target.value;
	}
    const getAddress = (event) => {
        store.newContact.address = event.target.value;

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

        </form>
    );
};
