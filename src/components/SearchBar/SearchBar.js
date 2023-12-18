import { useState } from 'react';

export const SearchBar = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  const updateQuery = event => {
    event.preventDefault();
    setSearchParams({ query: query });
  };

  const handleSearchParams = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <div>
      <form onSubmit={updateQuery}>
        <input
          value={query}
          type="text"
          placeholder="Enter name"
          autoFocus
          onChange={handleSearchParams}
        ></input>
        <button type="submit" disabled={!query}>
          Search
        </button>
      </form>
    </div>
  );
};
