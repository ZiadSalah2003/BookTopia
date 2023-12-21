import React, { useState } from 'react';
import './App.css';

function App() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = () => {
    // Add your form submission logic here
    console.log('Form submitted:', { userName, password, confirmPassword });
  };

  return (
    <div className="profile-container">
      <div className="input-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={userName} onChange={handleNameChange} />
      </div>

      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>

      <div className="input-group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} />
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
