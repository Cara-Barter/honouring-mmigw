import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import EventRegistration from './pages/EventRegistration/EventRegistration';
import HonouringMMIWG from './pages/HonouringMMIWG/HonouringMMIWG';
import NotFound from './pages/NotFound/NotFound';
import Footer from './components/Footer/Footer';

function App() {
  // console.log('in app');
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact render={(routerProps) => (
            <HomePage {...routerProps} />
          )}
          />
          <Route path='/event' render={(routerProps) => (
            <EventRegistration {...routerProps} />
          )}
          />
          <Route path='/honouring' render={(routerProps) => (
            <HonouringMMIWG {...routerProps} />
          )}
          />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
