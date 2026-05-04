import { useEffect, useState, useRef } from 'react';
import './App.css';
import Meal from './Meal';

function App() {
  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);

  const debounceTimeout = useRef(null);

  const fetchMeals = async () => {
    let baseUrl = 'https://api.freeapi.app/api/v1/public/meals';
    page && (baseUrl += `?page=${page}`);
    debouncedQuery && (baseUrl += `&query=${debouncedQuery}`);

    try {
      setLoading(true);
      const response = await fetch(baseUrl);
      const data = await response.json();

      if (data.success) {
        const apiData = data.data;
        const { nextPage, previousPage, data: meals } = apiData;

        setMeals(meals);
        setHasNextPage(nextPage);
        setHasPrevPage(previousPage);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      setDebouncedQuery(query);
      setPage(1); // Reset to page 1 when query changes
    }, 2000); // 2 seconds debounce
  }, [query]);

  useEffect(() => {
    fetchMeals();
  }, [page, debouncedQuery]);

  return (
    <div className="app">
      <h1>Meals Listing</h1>
      <input
        type="text"
        placeholder="Search meals..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      {loading && <p>Loading...</p>}
      <div className="meals-grid">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal} />
        ))}
      </div>
      <div className="pagination">
        {hasPrevPage && (
          <button onClick={() => setPage(page - 1)}>Previous</button>
        )}
        <span>Page {page}</span>
        {hasNextPage && (
          <button onClick={() => setPage(page + 1)}>Next</button>
        )}
      </div>
    </div>
  );
}

export default App;
