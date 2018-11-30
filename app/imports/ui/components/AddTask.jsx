import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Grid, Form, Header, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Groups } from '/imports/api/group/group';
import { withRouter, Link, NavLink } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Bert } from 'meteor/themeteorchef:bert';
import { Tasks } from '/imports/api/task/task';



class AddTask extends React.Component {
    constructor() {
        super();
        this.createOnClick = this.createOnClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.insertCallback = this.insertCallback.bind(this);
        this.state = {
            task: '',
            error: '',
            title: '',
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
        const title = this.state.title;
        const task = this.state.task;
        const members = this.props.members;
        // Groups.insert({ name, members }, this.insertCallback);
        groupId = this.props.groupId;
        // console.log(group);
        console.log(task);
        console.log(title);

        if (task === '' || title === '') {
            this.setState({ error: 'Fields cannot be empty' });
        }
        else{
            Tasks.insert({ title, task, members, groupId }, this.insertCallback);
        }
    }
    render() {
        return (
            <Grid centered>
                    <Container>
                        <Form onSubmit={this.createOnClick}>
                            <Header as="h2" textAlign="center">
                                To-Do
                                </Header>
                            <Grid centered>
                                <Grid.Row>
                                    <Grid.Column width={12}>
                                        <Form.Input
                                            label="Title"
                                            name="title"
                                            type="title"
                                            placeholder=""
                                            onChange={this.handleChange}
                                        />
                                        <Form.Input
                                            label="Task"
                                            name="task"
                                            type="task"
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

AddTask.propTypes = {
    groupId: PropTypes.string.isRequired,
    members: PropTypes.array.isRequired,
};

export default withTracker(({ match }) => {
    const subscription = Meteor.subscribe('Groups');
    const subscription2 = Meteor.subscribe('Tasks');

    return {
        ready: subscription.ready() && subscription2.ready(),
    };
})(AddTask);