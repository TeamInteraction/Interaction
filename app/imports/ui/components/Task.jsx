import React from 'react';
import { Feed, Comment, Button, Segment, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Tasks } from '/imports/api/task/task';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.deleteOnClick = this.deleteOnClick.bind(this);
  }

  deleteOnClick() {
    Tasks.remove(this.props.task._id);
  }

  render() {


    const feedstyle = { margin: '20px' }
    return (
      <Segment>
      <Grid verticalAlign='middle'>
        <Grid.Column centered width={14}>
          <Comment style={feedstyle}>
            <Comment.Content>
              <Comment.Author>{this.props.task.title}</Comment.Author>
              <Comment.Text>{this.props.task.task}</Comment.Text>

            </Comment.Content>
          </Comment>
        </Grid.Column>
        <Grid.Column>
          <Button
            onClick={this.deleteOnClick}
            icon="check circle"
            left
          >
          </Button>
        </Grid.Column>

      </Grid>
      </Segment>

    );
  }
}

/** Require a document to be passed to this component. */
Task.propTypes = {
  task: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Task);
