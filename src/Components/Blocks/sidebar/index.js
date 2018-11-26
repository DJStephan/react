import styled from 'styled-components'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Icon,
  Menu,
  Sidebar,
} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const SidebarDiv = styled.div`
    height: 100%;
    width: 160px;
    position: fixed;
    z-index: 1;
    top: 0
    left: 0
    background-color: transparent;
    overflow-x = hidden;
`

const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon='labeled'
    inverted
    vertical
    visible={visible}
    width='thin'
  >
    <Menu.Item as={NavLink} exact to='/'>
      <Icon name='home' />
      Home
    </Menu.Item>
    <Menu.Item as={NavLink} to='/myStory'>
      <Icon name='motorcycle' />
      Bio
    </Menu.Item>
    <Menu.Item as={NavLink} to='/resume'>
      <Icon name='graduation cap' />
      Resume
    </Menu.Item>
    <Menu.Item as={NavLink} to='/projects'>
      <Icon name='folder outline' />
      Projects
    </Menu.Item>
  </Sidebar>
)

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
}

export default class SidebarMenu extends Component {
  state = {
    animation: 'overlay',
    direction: 'left',
    dimmed: false,
    visible: false,
  }

  handleAnimationChange = animation => () =>
    this.setState({ animation, visible: !this.state.visible })

  render() {
    const { animation, direction, visible } = this.state
    return (
      <SidebarDiv onMouseLeave={this.handleAnimationChange('overlay')} onMouseEnter={this.handleAnimationChange('overlay')}>
        <VerticalSidebar animation={animation} direction={direction} visible={visible} />
      </SidebarDiv>
    )
  }
}