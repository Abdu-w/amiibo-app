import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Game from './components/Games'
import Collection from './components/Collection'
import GameForm from './components/GameForm'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div>

    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>  
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/collection" component={Collection}/>
        <Route exact path="/ammibo" component={Game}/>
        <Route exact path="/feedback" component={GameForm}/>
      </Switch>
    </div>
  </BrowserRouter>
      <Footer />
    </div>
  );
}
export default App;
