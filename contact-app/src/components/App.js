import './App.css';
import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const Local_storage_key = "contacts";
  const [contacts, setContacts] = useState([])

  const addContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, { id: uuid(), ...contacts }]);
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(Local_storage_key));
    if (data) setContacts(data);
  }, []);

  useEffect(() => {
    localStorage.setItem(Local_storage_key, JSON.stringify(contacts));
  }, [contacts]);


  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
