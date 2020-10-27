import React from 'react';
import './App.css';
import Header from './components/header';
import Hero from './components/Hero';
import Home from './containers/Home';
import ContactUs from './containers/Home/ContactUs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Post from './containers/Home/Post';

function App() {
  return (

    <Router>
      <div className="App">
        <Header/>
        <Hero />

          <Route path="/" exact component={Home} />
          <Route path="/ContactUs" component={ContactUs} />
          <Route path="/Post" component={Post} />
      </div>
    </Router>
    
  );
}

export default App;
