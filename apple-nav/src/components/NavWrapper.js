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
            {this.state.nav.map(name => ( 
                <div key={name.id}>
                    <NavLink to={`/${name.id}/sub`}>{name.name}</NavLink>
                </div>
                ))}
            <Route path="/" render={props => <Nav {...props} navNames={this.state.navNames} />} />
          </div>
        );
      }
    }
export default NavWrapper
