import React from 'react';
import Cards from '../Cards/Cards.js';
import SearchBar from '../SearchBar/SearchBar.js';

const Home = ({ cities, onClose, onSearch }) => {
    return (
        <div>
            <SearchBar onSearch={onSearch} />
            <Cards
                cities={cities}
                onClose={onClose}
            />
        </div>
    )
}

export default Home