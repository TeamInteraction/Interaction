import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { withRouter, NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item 
            as={NavLink} 
            activeClassName="" 
            exact 
            to="/" 
            name='home' 
            active={activeItem === 'home'} 
            onClick={this.handleItemClick} />
          <Menu.Item
            position='right'
            name='Sign Up'
            active={activeItem === 'Sign Up'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    )
  }
}


export default withRouter(NavBar);
