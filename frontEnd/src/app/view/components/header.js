import React, { Component } from 'react';
import HeaderTemplate from '../template/header-template';
import SidebarTemplate from '../template/sidebar-template';

class Header extends Component {
  render() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0" />
        <meta name="description" content="OrgDesk Is CRM for companies." />
        <meta name="author" content="WebvioServices" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png" />
     
        <title>OrgDesk</title>
        
         
        <HeaderTemplate />
        <SidebarTemplate />
        </div>

    );
  }
}

export default Header;