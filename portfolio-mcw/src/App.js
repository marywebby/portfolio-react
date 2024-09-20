import React from 'react';
import StarrySky from './components/StarrySky';
import Header from './components/Header';
import './App.css';
import './css/tailwind.css';

function App() {
  return (
    <div className='background: radial-gradient(600px at 966px 268px, rgba(29, 78, 216, 0.15), transparent 80%)'>
      <StarrySky />
      <Header />
    </div>
  );
}

export default App;



