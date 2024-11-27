import React from "react";


export const Form = ({ values, onChange }) => {

    return (
        <form>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="name" 
                    onChange={(e) => onChange("name", e.target.value)}
                    value={values.name || ""}
                />
                <label for="name">Full name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="email"
                    onChange={(e) => onChange("email", e.target.value)}
                    value={values.email || ""}
                />
                <label for="email">Email</label>
            </div>
            <div className="form-floating mb-3">
                <input type="number" className="form-control" id="phone"
                    onChange={(e) => onChange("phone", e.target.value)}
                    value={values.phone || ""}
                />
                <label for="phone">Phone</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="address"
                    onChange={(e) => onChange("address", e.target.value)}
                    value={values.address || ""}
                />
                <label for="address">Address</label>
            </div>

        </form>
    );
};
