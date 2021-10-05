import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
//THe following imports each js file from the components folder
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';//Allows the user to implement the Navbar in the webpage.

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>
          <br />
          <Switch>
            <Route path='/' component={Content} exact /> {/*On button Click, the page will load the Content component */}
            <Route path='/create' component={Header} exact /> {/*On button Click, the page will load the Header component */}
            <Route path='/read' component={Footer} exact /> {/*On button Click, the page will load the Footer component */}
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
