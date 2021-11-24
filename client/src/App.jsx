import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import HomePage from './pages/HomePage/HomePage';

function App() {
  console.log('in app');
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact render={(routerProps) => (
            <HomePage {...routerProps} />
          )}
          />
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
