import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="slider">
      <div className="App">
      <header className="App-header">
        <div id="card">
          <p>Login</p>
          <div id="login">
            <p className="title">Username</p>
            <input id="loginField" type="text"
            placeholder="Email..."/>
            <p className="title">Password</p>
            <input id="passwordField" type="password"
            placeholder="Password..."/>
            <div>
            <button id="submit">Login</button>
            <button id="signup">Sign Up</button>
            </div>
          </div>
        </div>
      </header>
    </div>
    </div>
  );
}

export default App;
