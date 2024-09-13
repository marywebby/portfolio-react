import React from 'react';
import StarrySky from './components/StarrySky';
import NavBar from './components/NavBar';
import './App.css';
import './css/tailwind.css';

function App() {
  return (
    <div>
      <StarrySky />
      <div class="grid grid-rows-3 grid-flow-col gap-4">
        <div class="row-span-3 ...">
          <NavBar />
        </div>
        <div class="col-span-2 ...">
          about me
        </div>
        <div class="row-span-2 col-span-2 ...">
          work history
        </div>
      </div>
    </div>
  );
}

export default App;



