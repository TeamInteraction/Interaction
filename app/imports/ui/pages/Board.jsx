import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Feed, Header, Loader, Grid, Segment, Table, Comment } from 'semantic-ui-react';
import { Groups } from '/imports/api/group/group';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Group from '/imports/ui/components/messages/Group';
import { Messages } from '/imports/api/message/message';
import DirectMessage from '/imports/ui/components/messages/DirectMessage';
import AddMessage from '/imports/ui/components/messages/AddMessage';
import Toolbar from '../components/Toolbar';
import MyEditor from '../components/MyEditor';
import AddUser from '../components/AddUser';
import Chat from '../components/Chat';
import Editor from '../components/Editor'


/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Board extends React.Component {
  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader>Getting data</Loader>;
  }



  /** Render the page once subscriptions have been received. */
  renderPage() {

    const styles = {
      height: {
        height: '100%',
      }
    };

    return (
      <div>
        <div style={styles.height}>
          <Toolbar />
          <Grid>
            <Grid.Column width={12}>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as='h1'>Tools</Header>
            </Grid.Column>
          </Grid>
          <Grid columns={2} divided>
            <Grid.Row >
              <Grid.Column width={12}>
                <Editor />
                <Container className="msgboard-container">
                  <Grid columns='equal'>
                    <Grid.Row stretched>
                      <Grid.Column width={10}>
                        <Segment>
                          <Comment.Group size='small'>
                            <Header as='h3' dividing>Messages</Header>
                            <Segment style={{ overflow: 'auto', maxHeight: 200 }}>
                              <Feed>
                                {this.props.messages.map((message, index) => <DirectMessage key={index} message={message} />)}
                              </Feed>
                            </Segment>
                            <AddMessage members={this.props.group.members} groupId={this.props.group._id} />
                          </Comment.Group>
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Container>
              </Grid.Column>
              <Grid.Column width={3}>
                <Grid.Row>
                  <Segment>Task 1</Segment>
                  <Segment>Task 2</Segment>
                  <Segment>Task 3</Segment>
                </Grid.Row>
                <Grid.Row>
                  <AddUser groupId={String(this.props.groupid)}></AddUser>
                </Grid.Row>

              </Grid.Column>
            </Grid.Row>
          </Grid>



        </div>

      </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
Board.propTypes = {
  group: PropTypes.object,
  messages: PropTypes.array.isRequired,
  groupid: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get access to Stuff documents.
  const groupId = match.params._id;
  const subscription = Meteor.subscribe('Groups');
  const subscription2 = Meteor.subscribe('Messages');
  return {
    group: Groups.findOne(groupId),
    messages: Messages.find({ groupId: groupId }).fetch(),
    groupid: groupId,
    ready: subscription.ready() && subscription2.ready(),
  };
})(Board);
