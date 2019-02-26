import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';

import Nav from './Nav'
import Data from '../data'

class NavWrapper extends Component {
    constructor() {
        super();
        this.state = {
          nav: []
        };
      }
    
      componentDidMount() {
        this.setState({ nav: Data });
      }
    
      render() {
        return (
          <div>
            {this.state.nav.map(nav => ( 
                <div key={nav.id}>
                    <NavLink to={`/${nav.id}/category`}>{nav.name}</NavLink>
                </div>
                ))}
            <Route path="/" render={props => <Nav {...props} nav={this.state.nav} />} />
          </div>
        );
      }
    }
export default NavWrapper
