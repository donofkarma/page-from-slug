import React from 'react';
import { Router } from "@reach/router"

import './App.css';

function Home({ slug }) {
  return (
    <div className="App">
      <h1>{slug.replace(/-/gi, ' ')}</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Home path="/:slug" />
    </Router>
  );
}

export default App;
