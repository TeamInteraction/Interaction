import React from 'react';
import { Feed, Comment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class Task extends React.Component {
  render() {
    const feedstyle = { margin: '20px' }
    return (
          <Comment style={feedstyle}>
            <Comment.Avatar src={this.props.task.image} />
            <Comment.Content>
              <Comment.Author>{this.props.task.username}</Comment.Author>
              <Comment.Text>{this.props.task.task}</Comment.Text>
            </Comment.Content>
          </Comment>
    );
  }
}

/** Require a document to be passed to this component. */
Task.propTypes = {
  task: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Task);
