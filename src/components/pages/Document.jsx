import React from 'react';
import { withRouter } from 'react-router';
import Toolbar from '../Toolbar';
import MyEditor from '../MyEditor';

class Document extends React.Component {
  render() {
    return (
      <div>
        <Toolbar/>
        <MyEditor/>
      </div>
    );
  }
}


export default withRouter(Document);
