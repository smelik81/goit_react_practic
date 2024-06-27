/* import { useState } from "react"; */

import { useState } from "react";
import "./App.css";
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

  const [values, setValues] = useState({
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
  };

  return (
    <>
      {/* <h1>Please enter your information</h1>
      <LoginForm onLogin={handleLogin} /> */}
      {/* <SearchBar /> */}
      {/*  <Identifikator onAdd={addUser} />
      <Identifikator onAdd={addUser} /> */}
      {/*  <RadioButton value={cofeeSize} onChange={setCofeeSize} /> */}
      {/* <Checkbox value={checkbox} onChange={setcheckbox} /> */}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="login"
          value={values.login}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default App;
