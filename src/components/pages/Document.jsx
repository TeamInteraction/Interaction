import React from 'react';
import { withRouter } from 'react-router';
import Toolbar from '../Toolbar';
import MyEditor from '../MyEditor';
import Proptypes from 'prop-types';

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

Document.propTypes = {
  // housings: PropTypes.object,
  // ready: PropTypes.bool.isRequired,
};

export default withRouter(Document);
