import { useEffect, useState } from "react";
import { getArticlesApi } from "./api/fetch-api";

import "./App.css";
import SearchArticlesForm from "./componens/SearchArticlesForm/SearchArticlesForm";
import Balance from "./componens/Balance";
/* import Checkbox from "./componens/Checknox/Checkbox"; */
/* import RadioButton from "./componens/Radio/Radio"; */
/* import Identifikator from "./componens/Identifikator/Identifikator"; */
/* import LoginForm from "./Login"; */
/* import SearchBar from "./componens/Searchbar/Searchbar"; */

/* const UpdateTracker = ({ value, onUpdate }) => {
  return <button onClick={onUpdate}>Click: {value}</button>;
}; */

function App() {
  /*  const [counter, setCounter] = useState(() => {
    const savedCounter = window.localStorage.getItem("total-response");
    return savedCounter ? JSON.parse(savedCounter) : { x: 0, y: 0 };
  });

  const handleClickUpdateX = () => {
    setCounter({
      ...counter,
      x: counter.x + 1,
    });
  };

  const handleClickUpdateY = () => {
    setCounter({
      ...counter,
      y: counter.y + 1,
    });
  };
  useEffect(() => {
    window.localStorage.setItem("total-response", JSON.stringify(counter));
  }, [counter]);

  return (
    <>
      <p>
        X: {counter.x} / Y: {counter.y}
      </p>
      <p>Total: {counter.x + counter.y}</p>
      <div>
        <button onClick={handleClickUpdateX}>Click Me-1</button>
        <button onClick={handleClickUpdateY}>Click Me-2</button>
        <button onClick={() => setCounter({ x: 0, y: 0 })}>Reset</button>
      </div>
    </>
  ); 
  */

  /* const handleLogin = (userDate) => {
    console.log("userDate", userDate);
  }; */

  /* const addUser = (newUser) => {
    console.log("send info about user", newUser);
  }; */

  /* const [cofeeSize, setCofeeSize] = useState("sm");*/
  /* const [checkbox, setcheckbox] = useState(false); */

  /*  const [values, setValues] = useState({
    login: "",
    password: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);

    setValues({
      login: "",
      password: "",
    });
  }; */

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const handleSearchSubmit = async (searchQuery) => {
    setQuery(searchQuery);
    setArticles([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const data = await getArticlesApi(query, page);
        setArticles((prev) => [...prev, ...data.hits]);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    query && fetchArticles();
  }, [query, page]);

  return (
    <>
      <div>
        <p>Practic with REDUX</p>
        <hr />
        <Balance />
      </div>
      <h1>Latest articles</h1>
      <SearchArticlesForm submit={handleSearchSubmit} />
      {isLoading && (
        <p>
          <span>Loading...</span>
        </p>
      )}
      {error && (
        <p>
          <span>Opps! Please try again...</span>
        </p>
      )}
      {articles.length > 0 && (
        <ul>
          {articles.map(({ objectID, url, title }) => (
            <li key={objectID}>
              <a href={url}>{title}</a>
            </li>
          ))}
        </ul>
      )}
      {articles.length > 0 && (
        <button onClick={handleLoadMore}>Load more</button>
      )}
    </>
  );
}

export default App;
