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



/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Chat extends React.Component {
  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (
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
    );
  }
}

/** Require an array of Stuff documents in the props. */
Chat.propTypes = {
  group: PropTypes.object,
  messages: PropTypes.array.isRequired,
};

export default withTracker(({}) => {})(Chat);