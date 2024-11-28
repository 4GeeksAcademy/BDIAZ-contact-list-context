import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "../../styles/card.css";


export const Card = ({ id, name, direction, email, onDelete }) => {

    return (
        <div className="row">
            <div className="card mb-3 border border-info shadow">
                <div className="row g-0 ">
                    <div className="col-md-2 p-4 d-flex justify-content-center">
                        <img
                            src="https://thispersondoesnotexist.com/"
                            className="img-fluid rounded-circle"
                            alt=""
                            style={{width: "150px"}}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{direction}</p>
                            <p className="card-text">
                                <small className="text-muted">{email}</small>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-1 d-flex align-items-center justify-content-center">
                        <Link to={`/contactDetails/${id}`}>
                            <button className="btn btn-light shadow-sm">Edit</button>
                        </Link>
                    </div>
                    <div className="col-md-1 d-flex align-items-center justify-content-center">
                        <button className="btn btn-danger" onClick={() => onDelete(id)}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
