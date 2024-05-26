// Import components
import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import About from './About';
import MusicPlanner from './MusicPlanner';
import Contact from './Contact';

// Export Menu Class
export default class Menu extends Component {
    render() {
        return (
            <Router>
            <div>
              <Navbar bg="info" variant={"dark"} expand="lg">
                <Container>
                  <Navbar.Brand href="/">Boss DJs NWA</Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                    <Nav
                      className="mr-auto my-2 my-lg-0"
                      style={{ maxHeight: '500px' }}
                    >
                      {/* Render the URL slugs */}
                      <Nav.Link as={Link} to="/">Home</Nav.Link>
                      <Nav.Link as={Link} to="/about">About</Nav.Link>
                      <Nav.Link as={Link} to="/music-planner">Music Planner</Nav.Link>
                      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
                <div>
                    {/* Use a Switch for React Router */}
                    <Switch>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/music-planner">
                            <MusicPlanner />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}