import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Nav from './Nav'
import Data from '../data'

class NavWrapper extends Component {
    constructor() {
        super();
        this.state = {
          navNames: []
        };
      }
    
      componentDidMount() {
        this.setState({ nav: Data });
      }
    
      render() {
        return (
          <div>
            <Route path="/" render={props => <Nav {...props} Data={this.state.navNames} />} />
          </div>
        );
      }
    }
export default NavWrapper
