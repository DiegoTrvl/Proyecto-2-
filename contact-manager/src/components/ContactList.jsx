import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    /*
    useEffect(() => {
        axios.get('/api/contacts')
            .then(response => setContacts(response.data))
            .catch(error => console.error(error));
    }, []);*/

    return (
        <div>
            <h2>Contact List</h2>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        {contact.name} - {contact.phoneNumber} - {contact.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;
