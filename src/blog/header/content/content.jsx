import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../../assets/logo.png';

const LogoWrapper = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  height: inherit;
  z-index: 10;
`;

const Logo = styled.img`
  height: 100px;
  padding: 40px 0px;
`;

const AboutUs = styled.div`
  background-color: white;
  opacity: 0.8;
  width: 70%;
  height: 200px;
  margin: auto;
  border-radius: 15px;
  padding: 15px;
`;

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <LogoWrapper>
        <Logo src={logo} />
        <AboutUs>
          WHO WE ARE? Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Maecenas eleifend lectus purus. Etiam tristique odio nunc, sed elementum massa gravida nec. Nunc sed odio nec massa varius pretium in a urna. Maecenas sit amet nisi tortor. Integer eu eros non mauris suscipit fermentum eget in mauris. Nulla eu nulla et ipsum pulvinar sagittis. Nam cursus sodales arcu, vitae pulvinar libero ultrices ut. Vivamus volutpat nec lectus eu ultrices.</AboutUs>
      </LogoWrapper>
    );
  }
}
 
export default Content;