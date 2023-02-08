import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class SidebarTemplate extends Component {
  render() {
    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
              <div id="sidebar-menu" className="sidebar-menu">
                    <ul>
                    <li><Link to='/dashboard' className="nav-link"> Home </Link></li>
                    <li><Link to='/profile' className="nav-link">Profile</Link></li>
                    <li><Link to='/about' className="nav-link">About</Link></li>
                </ul>
              </div>
            </div>
          </div>
    );
  }
}

export default SidebarTemplate;
