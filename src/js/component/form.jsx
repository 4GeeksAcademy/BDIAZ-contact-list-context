import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";


export const Form = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <form>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Full Name"/>
                <label for="floatingInput">Full name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email</label>
            </div>
            <div className="form-floating mb-3">
                <input type="number" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Phone</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Address</label>
            </div>
            <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
    );
};
