import React from 'react'
import './App.css';
import logo from './assets/logo.png'


import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Link } from 'react-router-dom';


import List from './components/List'

import {Button, Label, Grid, Advertisement, Container, Segment, Icon, Modal } from 'semantic-ui-react';
import {
  Checkbox,
  Image,
  Menu,
  Sidebar,
} from 'semantic-ui-react'

import Header from "./components/Header"
import Auth from "./components/Auth"
import ModalView from "./components/ModalView"

import HomePage from './screens/HomePage'


const App = () => {


    const [activeItem, setActiveItem ] = React.useState("")
    const [open, setOpen ] = React.useState(false)

    return (

              <Router>
              
              <Container fluid>
                  <Grid>
                    <Grid.Row only="computer">
                      <Advertisement  unit='large leaderboard'  test='Google Ads here.' centered />
                    </Grid.Row>
                  </Grid>
                  <Grid>
                    <Grid.Row only="mobile">
                      <Advertisement  unit='banner' test='Google Ads here.' centered />
                    </Grid.Row>
                  </Grid>
                </Container>

                <Container>

                <Grid>
                  <Grid.Row only="computer">
                    <Grid.Column>
                    <Header style={{marginTop:10}} activeItem={activeItem} setActiveItem={setActiveItem}   /> 
                    </Grid.Column>
                  </Grid.Row>
                </Grid>

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
              

      
        
    );
   }

export default App;
