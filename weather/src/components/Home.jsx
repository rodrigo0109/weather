import React from 'react'
import Cards from './Cards'
import Footer from './Footer'
import SearchBar from './SearchBar'

const Home = ({ cities, onClose, onSearch }) => {
    return (
        <div>
            <SearchBar onSearch={onSearch} />
            <Cards
                cities={cities}
                onClose={onClose}
            />
            <Footer />
        </div>
    )
}

export default Home