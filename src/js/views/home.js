import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Card } from "../component/card.jsx";
import { Modal } from "../component/modal.jsx";

export const Home = () => {
    const { store, actions } = useContext(Context);
    const [ modalVisible, setModalVisible ] = useState(false);
    const [ idToDelete, setIdToDelete ] = useState(null);

    useEffect(() => {
        actions.getAgendas();
    }, [])

    const handleDelete = () => {
        actions.deleteContact(idToDelete)
        setModalVisible(false)
    };

    const showModal = (id) => {
        console.log("showModal")
        setIdToDelete(id)
        setModalVisible(true)
    };

    const hiddeModal = () => {
        console.log("hiddeModal")
        setModalVisible(false)
    };

    return (
        <div className="container mt-5">
            <div className="row mb-3">
                <div className="col-12 text-end">
                    <Link to={"/contactDetails/0"}>
                        <button className="btn btn-primary">Add Contact</button>
                    </Link>
                </div>
            </div>
            {
                store.contacts.length === 0 
                ? (
                    <h1>
                        No contacts to show :(
                    </h1>
                )
                : (
                    store.contacts.map((contact) => {
                        return (
                        <Card key={contact.id} 
                            id={contact.id} 
                            name={contact.name} 
                            direction={contact.address} 
                            email={contact.email}
                            onDelete={showModal}
                        />
                    )
                    })
                )
            }
            <Modal 
                show={modalVisible}
                title="Are you sure?"
                message="This contact will be deleted"
                onConfirm={handleDelete}
                onCancel={hiddeModal}
            />
        </div>
    );
};
