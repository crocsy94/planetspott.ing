import React, { Component } from 'react';
import styled from 'styled-components';


const NavWrapper = styled.div`
  width: 50px;  
  padding: 10px;
  background-color: transparent;
`;

const NavElement = styled.button`
  font-weight: bold;
  font-size: 110%;
  width: 50px;
  color: gray;
  margin: 10px 0px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    const months = this.props.months.map((month) => {
      return (
        <NavElement key={month}>
          {month.toUpperCase()}
        </NavElement>
      )
    });

    return (
      <NavWrapper>
        {months}
      </NavWrapper>
    );
  }
}

export default Navbar;