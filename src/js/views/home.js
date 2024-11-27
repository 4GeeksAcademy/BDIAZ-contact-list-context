import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Card } from "../component/card.jsx";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(()=> {
        actions.getAgendas();
    }, [])

    return (
        <div className="container mt-5">
            <div className="row mb-3">
                <div className="col-12 text-end">
                    <Link to={"/contactDetails/0"}>
                        <button className="btn btn-primary">Add contact</button>
                    </Link>
                </div>
            </div>
            {
                store.contacts.length === 0 
                ? (
                    <p >
                        No contacts to show
                    </p>
                )
                : (
                    store.contacts.map((contact) => {
                        return (
                        <Card key={contact.id} 
                            id={contact.id} 
                            name={contact.name} 
                            direction={contact.address} 
                            email={contact.email}
                        />)
                    })
                )
            }
        </div>
    );
};
