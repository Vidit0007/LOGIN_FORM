import Login from "./Login";
import Register from "./Register";
import React, { useState } from "react";
import Home from "./Home";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [RegisteredIn, setRegisteredIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };
  const handleLogout = () => {
    setLoggedIn(false);
  };
  const handleRegister = () => {
    setRegisteredIn(true);
  };

  return (
    <div>
      {RegisteredIn ? (
        <div>
          <Login onLogin={handleLogin} />
        </div>
      ) : (
        <div>
          <Register onRegister={handleRegister} />
        </div>
      )}
      {loggedIn && (<div><Home /><button className="btn2" onClick={handleLogout}>Logout</button></div>)}</div>
  
  );
}

export default App;
