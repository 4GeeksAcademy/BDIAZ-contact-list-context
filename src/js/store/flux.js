const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
			],
			contacts: [],
			newContact: {
				name: "",
				phone: "",
				email: "",
				address: ""
			},
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getAgendas: () => {
				console.log("-----------getAgendas----------------")
				fetch('https://playground.4geeks.com/contact/agendas?offset=0&limit=100', {
					method: "GET",
					headers: {
					  "Content-Type": "application/json"
					}
				  })
				  .then(resp => {
					  console.log(`resp.status:` , resp.status, `resp.statusText:`, resp.statusText); 
					  return resp.json(); 
				  })
				  .then(data => {
					console.log("Data.agendas:", data.agendas);
					const users = data.agendas; 
					users.find((agenda) => {return agenda.slug === "bdiaz"}) 
						? getActions().getAgenda()
						: getActions().createAgenda()
				  })
				  .catch(error => {
					  console.log(error);
				  });
			
			},
			getAgenda: () => {
				console.log("-----------getAgenda----------------")
				fetch('https://playground.4geeks.com/contact/agendas/bdiaz', {
					method: "GET",
					headers: {
					  "Content-Type": "application/json"
					}
				  })
				  .then(resp => {
					  console.log(`resp.status:` , resp.status, `resp.statusText:`, resp.statusText); 
					  return resp.json(); 
				  })
				  .then(data => {
					console.log("Data.contacts:", data.contacts);
					setStore({contacts: data.contacts})
				  })
				  .catch(error => {
					  console.log(error);
				  });
			
			},
			createAgenda: () => {
				console.log("-----------createAgenda----------------")
				fetch('https://playground.4geeks.com/contact/agendas/bdiaz', {
					method: "POST",
					headers: {
					  "Content-Type": "application/json"
					}
				  })
				  .then(resp => {
					  console.log(`resp.status:` , resp.status, `resp.statusText:`, resp.statusText); 
					  return resp.json(); 
				  })
				  .then(data => {
					console.log("Data:", data);
					console.log("Agenda BDIAZ creada");
					getActions().getAgenda()
				  })
				  .catch(error => {
					  console.log(error);
				  });
			
			},
			deleteContact: (id) => {
				console.log("-----------deleteContact----------------")
				fetch(`https://playground.4geeks.com/contact/agendas/bdiaz/contacts/${id}`, {
					method: "DELETE",
					headers: {
					  "Content-Type": "application/json"
					}
				  })
				  .then(resp => {
					  console.log(`resp.status:` , resp.status, `resp.statusText:`, resp.statusText); 
					  console.log("Data:", resp);
					  console.log("Contacto Eliminado");
					  getActions().getAgenda()
					  return resp; 
				  })
				  .catch(error => {
					  console.log(error);
				  });
			
			},
			addContact: (contact) => {
				console.log("-----------addContact----------------")
				console.log("contact", contact)
				fetch(`https://playground.4geeks.com/contact/agendas/bdiaz/contacts`, {
					method: "POST",
					body: JSON.stringify({
						name: contact.name,
						phone: contact.phone,
						email: contact.email,
						address: contact.address
					}),
					headers: {
					  "Content-Type": "application/json",
					  "accept": "application/json"
					}
				  })
				  .then(resp => {
					  console.log(`resp.status:` , resp.status, `resp.statusText:`, resp.statusText); 
					  console.log("Data:", resp);
					  console.log("Contacto agregado");
					  getActions().getAgenda()
					  return resp;
				  })
				  .catch(error => {
					  console.log(error);
				  });
			
			},
			updateContact: (contact, id) => {
				console.log("-----------uodateContact----------------")
				console.log("contact", contact)
				fetch(`https://playground.4geeks.com/contact/agendas/bdiaz/contacts/${id}`, {
					method: "PUT",
					body: JSON.stringify({
						name: contact.name,
						phone: contact.phone,
						email: contact.email,
						address: contact.address
					}),
					headers: {
					  "Content-Type": "application/json",
					  "accept": "application/json"
					}
				  })
				  .then(resp => {
					  console.log(`resp.status:` , resp.status, `resp.statusText:`, resp.statusText); 
					  console.log("Data:", resp);
					  console.log("Contacto editado");
					  getActions().getAgenda()
					  return resp;
				  })
				  .catch(error => {
					  console.log(error);
				  });
			
			},
		}
	};
};

export default getState;
