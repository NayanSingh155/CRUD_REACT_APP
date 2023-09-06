import './App.css';
import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const Local_storage_key = "contacts";
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(Local_storage_key)) ?? [])

  const addContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, { id: uuid(), ...contact }]);
  }
  const removeContactHandler=(id)=>{
    const newContactList=contacts.filter((contact)=>{
      return contact.id!==id;
    })
    setContacts(newContactList);
  }

  useEffect(() => {
    localStorage.setItem(Local_storage_key, JSON.stringify(contacts));
  }, [contacts]);


  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
