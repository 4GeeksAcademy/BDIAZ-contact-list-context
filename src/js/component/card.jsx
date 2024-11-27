import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";


export const Card = ({ id, name, direction, email, onDelete }) => {

    return (
        <div className="row">
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src="https://via.placeholder.com/150"
                            className="img-fluid rounded-circle"
                            alt="..."
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{direction}</p>
                            <p className="card-text">
                                <small className="text-muted">{email}</small>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-1 d-flex align-items-center">
                        <Link to={`/contactDetails/${id}`}>
                            <button className="btn btn-link">Edit</button>
                        </Link>
                    </div>
                    <div className="col-md-1 d-flex align-items-center">
                        <button className="btn btn-link text-danger" onClick={() => onDelete(id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
