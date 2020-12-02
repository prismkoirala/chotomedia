// origin-branch
// React imports
import React from 'react'
import './App.css';

// react-router-dom
import {HashRouter, BrowserRouter as Router, HashRouter, Route} from 'react-router-dom'
import { Link } from 'react-router-dom';

// semantic-UI imports
import { Label, Grid, Advertisement, Container, Segment, Icon, Modal } from 'semantic-ui-react';

// components imports here
import Header from "./components/Header"
import Auth from "./components/Auth"
import ModalView from "./components/ModalView"
import List from './components/List'

//screens imports here
import HomePage from './screens/HomePage'

// Images imports
import logo from './assets/logo.png'

const App = () => {


    const [activeItem, setActiveItem ] = React.useState("")
    const [open, setOpen ] = React.useState(false)

    return (
          <HashRouter basename={process.env.PUBLIC_URL}>
              <Router>
                {/* computer ko navbar ko banner */}
                <Container fluid>
                    <Grid>
                      <Grid.Row only="computer">
                        <Advertisement  unit='large leaderboard'  test='Google Ads here.' centered />
                      </Grid.Row>
                    </Grid>
                  </Container>

                <Container>
                  {/* computer ko navbar */}
                    <Grid>
                      <Grid.Row only="computer">
                        <Grid.Column>
                        <Header style={{marginTop:10}} activeItem={activeItem} setActiveItem={setActiveItem}   /> 
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>

                  {/* mobile ko navbar */}
                    <Grid>
                      <Grid.Row only="mobile">
                        <Grid.Column>
                          <Segment inverted >
                            <Link to=''>
                              <Label size="large" as='a' color='red' circular image>
                                <img src={logo} />
                                chotomedia 
                                <Label.Detail>.com</Label.Detail>
                              </Label>    
                            </Link>
                            <ModalView open={open} setOpen={setOpen} />
                          </Segment>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>

                  {/* Nav bar ko muni ko part */}

                    <Route exact path="/">
                      <HomePage />
                      </Route>

                    <Route path="/:name" render={
                        (props) => <List activeItem={props.match.params.name} setActiveItem={setActiveItem}/> 
                      } >
                      </Route>

                    <Route path="/signin">
                       <Auth />
                      </Route>
                      
                </Container>
              </Router>
          </HashRouter>
              

      
        
    );
   }

export default App;
