import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({ onSearch }) {

  const [city, setCity] = useState('');
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
    setInput('');
  }

  return (
    <div className="form_container">
      <h1>Find your current weather</h1>
      <form
        className="form"
        onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="text"
          placeholder="City..."
          onChange={handleInputChange}
          value={input}
        />
        <button className="btn-search" type="submit" ><span className="material-symbols-outlined">
          search
        </span></button>
      </form>
    </div>
  );
}
