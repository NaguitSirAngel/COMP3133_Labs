import React from 'react';
import { Route, Switch, Link } from "react-router-dom"; 
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Error from './components/error';
import Navigation from './components/navigation';
import Student from './components/student';
import customHistory from './components/History';
import Riderect from './components/riderect';

const NewRoute = () => {
  return(
    <div>
      <p>New Route</p>
    </div>
  );
};

const Home = () => {
  return(
    <div>
      <p>My Home</p>
    </div>
  );
};

class App extends React.Component {
  state = {  }
  render() { 
    return (
    <BrowserRouter history={customHistory}>
      <div>
        <Navigation/>
        <Route>
          <Route path="/" component={Home} exact/>
          <Route path="/newRoute" component={NewRoute}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/about" component={About}/>
          <Route path="/student/:studentname/:studentno?" component={Student}/>
          <Route path="/riderect" component={Riderect}/>

        </Route>
      </div>
    </BrowserRouter>  
    );
  }
}
 
export default App;
