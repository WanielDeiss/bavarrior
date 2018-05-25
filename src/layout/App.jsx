// Node Packages
import React, { Component } from 'react';

// Components
import RandomWords from '../components/RandomWords';
import GithubRibbon from '../components/GithubRibbon';

const App = () => {
  return (
    <div className="Layout">
      <RandomWords />
      <GithubRibbon />
    </div>
  );
};

export default App;