import React from 'react';

function SearchBar({ filterNotes }) {
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    filterNotes(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search notes..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
