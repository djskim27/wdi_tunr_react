import React, { Component } from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components"

const NavBar = styled.div`
width: 95%;  
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 2.5%;
background-color: rgba(2,178, 208, 1);
box-shadow: 0px 1px 6px black;
a{
    text-decoration: none;
    margin: 0 5px;
    &:visited{
      color: white;
    }
  }
`

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <NavBar>
            <h1>
                <Link to='/'>Tunr</Link>
            </h1>
            <div>
              <Link to='/artist/1'> Artists </Link>
        
            
        
              <Link to='/signup'> Signup </Link>
            </div>
            

          </NavBar>
      </div>
    )
  }
}
