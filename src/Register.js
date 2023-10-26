import React, { useState } from 'react';


function Register({ onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
   
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    onRegister();
  };

  return (
    <div className='container2'>
        <br/>
      <h1 className='heading'>REGISTER</h1>
      <input
      className='input'
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
   
      <input className='input'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br/>
      <br/>

      <button className='btn1' onClick={handleRegister}>Register</button>
    </div>
  );
}
export default Register;