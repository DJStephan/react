import styled from 'styled-components'
//import { NavLink } from 'react-router-dom'
import Sidebar from '../../Components/Blocks/sidebar'
import React from 'react';
import background from '../../images/astronomy-constellation.jpg'

// const Container = (props) => styled.div`
//   display: flex;
//   justify-content: flex-start;
//   width: 100vw;
//   height: 100vh;
//   background-size: 100% 100%;
//   background-image: url(${props.background});
// `

  

  const Layout = props => {
      return (
          <div>
              <Sidebar>
              </Sidebar>
              {props.children}
          </div> 
      )
    
  }

export default Layout