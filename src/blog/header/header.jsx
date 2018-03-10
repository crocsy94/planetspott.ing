import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';

const LogoWrapper = styled.div`
  padding: 10px;
  width: 100%;
  text-align: center;
  height: 100px;
`;

const Logo = styled.img`
  height: inherit;
`;


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <LogoWrapper>
        <Logo src={logo} />
      </LogoWrapper>
    );
  }
}
 
export default Header;