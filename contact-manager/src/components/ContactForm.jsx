import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = ({ contact, onSave }) => {
    const [name, setName] = useState(contact ? contact.name : '');
    const [phoneNumber, setPhoneNumber] = useState(contact ? contact.phoneNumber : '');
    const [email, setEmail] = useState(contact ? contact.email : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = { name, phoneNumber, email };
        if (contact) {
            axios.put(`/api/contacts/${contact.id}`, newContact)
                .then(response => onSave(response.data))
                .catch(error => console.error(error));
        } else {
            axios.post('/api/contacts', newContact)
                .then(response => onSave(response.data))
                .catch(error => console.error(error));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <button type="submit">Save</button>
        </form>
    );
};

export default ContactForm;
