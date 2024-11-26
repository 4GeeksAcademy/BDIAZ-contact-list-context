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
                    <Link to={"/contactDetails/1"}>
                        <button className="btn btn-primary">Add contact</button>
                    </Link>
                </div>
            </div>
            <Card name="Name" direction="Direction" email="Email"/>
        </div>
    );
};
