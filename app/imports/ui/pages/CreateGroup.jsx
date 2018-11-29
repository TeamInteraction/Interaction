import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Form, Grid, Loader, Message, Button, Segment, Card } from 'semantic-ui-react';
import { Users } from '/imports/api/user/user';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Groups } from '/imports/api/group/group';
import { Bert } from 'meteor/themeteorchef:bert';
import { Link, Redirect } from 'react-router-dom';
import { GroupSchema } from '../../api/group/group';


/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class CreateGroup extends React.Component {
    /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
    constructor() {
        super();
        this.createOnClick = this.createOnClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.insertCallback = this.insertCallback.bind(this);
        this.state = {
            error: '',
            groupname: '',
            redirectToReferer: false,
        };
    }

    render() {
        return (
            this.props.ready) ? this.renderPage() : <Loader>Getting data</Loader>;
    }

    handleChange(e, { name, value }) {
        this.setState({ [name]: value });
    }

    insertCallback(error) {
        if (error) {
            Bert.alert({ type: 'danger', message: `Add failed: ${error.message}` });
        } else {
            this.setState({ error: '', redirectToReferer: true });
            
        }
    }

    createOnClick(user) {
        console.log('onclick');
        console.log(this.state.groupname);
        const members = [Meteor.user().username];
        const name = this.state.groupname;
        Groups.insert({ name, members }, this.insertCallback);
    }

    /** Render the page once subscriptions have been received. */
    renderPage() {
        if (this.state.redirectToReferer) {
            return <Redirect to={"/groupselector"}/>;
          }
        const headerStyle = { marginTop: '20px' };

        return (
            <Grid centered>
                <Grid.Column width={6}>
                    <Container className="editprofile-container">

                        <Form onSubmit={this.createOnClick}>
                            <Header as="h2" textAlign="center">
                                Create Group
                  </Header>
                            <Grid centered>
                                <Grid.Row>
                                    <Grid.Column width={6}>
                                        <Form.Input
                                            label="Group Name"
                                            name="groupname"
                                            type="groupname"
                                            placeholder=""
                                            onChange={this.handleChange}
                                        />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Form.Button content="Submit" />
                                </Grid.Row>
                            </Grid>
                        </Form>
                        {this.state.error === '' ? (
                            ''
                        ) : (
                                <Message
                                    error
                                    header="Registration was not successful"
                                    content={this.state.error}
                                />
                            )}
                    </Container>
                </Grid.Column>
            </Grid>
        );
    }
}

/** Require an array of Stuff documents in the props. */
CreateGroup.propTypes = {
    users: PropTypes.object,
    feedbacks: PropTypes.array.isRequired,
    housings: PropTypes.array.isRequired,
    ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
    const userId = match.params._id;
    const subscription = Meteor.subscribe('Users');
    const subscription2 = Meteor.subscribe('Groups');

    return {
        users: Users.findOne(userId),
        groups: Groups.find(),
        ready: subscription.ready() && subscription2.ready(),
    };
})(CreateGroup);