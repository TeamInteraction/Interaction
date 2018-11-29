import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Grid, Form, Header, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Groups } from '/imports/api/group/group';
import { withRouter, Link, NavLink } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Bert } from 'meteor/themeteorchef:bert';



class AddUser extends React.Component {
    constructor() {
        super();
        this.createOnClick = this.createOnClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.insertCallback = this.insertCallback.bind(this);
        this.state = {
            error: '',
            email: '',
            redirectToReferer: false,
        };
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
        const usr = Meteor.user().username;
        const email = this.state.email;
        // Groups.insert({ name, members }, this.insertCallback);
        group = Groups.findOne(this.props.groupId);
        console.log(group);

        if (email === '') {
            this.setState({ error: 'Email cannot be empty' });
        }
        else if (group.members.indexOf(email) > -1)
            this.setState({ error: 'User is already in group' });
        else {
            group.members.push(email);
            const members = group.members;
            Groups.update(this.props.groupId, {
                $set: {
                    members
                }
            }, (error) => (error ?
                Bert.alert({ type: 'danger', message: `Add Failed: ${error.message}` }) :
                Bert.alert({ type: 'success', message: 'User Added' })));
            this.setState({ error: '' });

        }

    }
    render() {
        return (
            <Grid centered>
                    <Container className="editprofile-container">
                        <Form onSubmit={this.createOnClick}>
                            <Header as="h2" textAlign="center">
                                Add Users To Group
                                </Header>
                            <Grid centered>
                                <Grid.Row>
                                    <Grid.Column width={12}>
                                        <Form.Input
                                            label="Email"
                                            name="email"
                                            type="email"
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
                                    header="Failed to add"
                                    content={this.state.error}
                                />
                            )}
                    </Container>
            </Grid>);
    }
}

AddUser.propTypes = {
    groupId: PropTypes.string.isRequired,
};

export default withTracker(({ match }) => {
    const subscription = Meteor.subscribe('Groups');

    return {
        ready: subscription.ready(),
    };
})(AddUser);