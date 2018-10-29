import React from 'react';
import { withRouter } from 'react-router';

class Landing extends React.Component {
  render() {
    return (
        <h1>Hello World!</h1>
    );
  }
}


export default withRouter(Landing);
