import React, {useState} from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      onLogin();
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className='container1'>
        <br/>

      <h1 className='heading2'>LOGIN</h1>
      <input className='input'
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    
      <input
      className='input'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br/>
      <br/>

      <button className='btn1' onClick={handleLogin}>Login</button>
    </div>
  );
}
export default Login