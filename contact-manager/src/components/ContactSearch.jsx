import React, { useState } from 'react';
import axios from 'axios';

const ContactSearch = ({ onSearchResults }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        axios.get(`/api/contacts/search?query=${query}`)
            .then(response => onSearchResults(response.data))
            .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSearch}>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search" required />
            <button type="submit">Search</button>
        </form>
    );
};

export default ContactSearch;
