
import Sidebar from '../../Components/Blocks/sidebar'
import React from 'react';

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