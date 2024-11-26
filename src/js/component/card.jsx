import React from "react";

export const Card = (props) => {

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
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">{props.direction}</p>
                            <p className="card-text">
                                <small className="text-muted">{props.email}</small>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-1 d-flex align-items-center">
                        <button className="btn btn-link">Edit</button>
                    </div>
                    <div className="col-md-1 d-flex align-items-center">
                        <button className="btn btn-link text-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
