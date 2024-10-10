import React, { useState } from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import ContactSearch from './components/ContactSearch';

const App = () => {
    const [contacts, setContacts] = useState([]);

    const handleSave = (newContact) => {
        setContacts([...contacts, newContact]);
    };

    const handleSearchResults = (results) => {
        setContacts(results);
    };

    return (
        <div>
            <h1>Contact Manager</h1>
            <ContactForm onSave={handleSave} />
            <ContactSearch onSearchResults={handleSearchResults} />
            <ContactList contacts={contacts} />
        </div>
    );
};

export default App;
