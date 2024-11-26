const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: []
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
			
			}
		}
	};
};

export default getState;
