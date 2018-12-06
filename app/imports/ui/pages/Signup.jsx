import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Container, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Accounts } from 'meteor/accounts-base';
import { Users, UserSchema } from '/imports/api/user/user';


export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      error: '',
      redirectToReferer: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }

  handleSubmit() {
    const { firstName, lastName, email, password } = this.state;
    Accounts.createUser({ email, username: email, password }, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        const owner = Meteor.user().username;
        Users.insert({
          firstName,
          lastName,
          image: '/images/default-profile.png',
          owner
        }, this.insertCallback);
        this.setState({ error: '', redirectToReferer: true });
      }
    });
  }

  render() {
    if (this.state.redirectToReferer) {
      return <Redirect to={"/"}/>;
    }
    const GenderOptions = [
      { key: 'm', text: 'Male', value: 'male' },
      { key: 'f', text: 'Female', value: 'female' },
    ];
    const TypeOptions = [
      { key: 'm', text: 'Lister', value: 'lister' },
      { key: 'f', text: 'Seeker', value: 'seeker' },
    ];

    const headerStyle = { marginTop: '20px' };

    return (
        <Grid centered>
          <Grid.Column width={6}>
            <Container className="editprofile-container">

              <Form onSubmit={this.handleSubmit}>
                <Header as="h2" textAlign="center">
                  Register your account
                </Header>
                <Grid centered>
                  <Grid.Row>
                    <Grid.Column width={6}>
                      <Form.Input
                          label="First Name"
                          name="firstName"
                          type="firstName"
                          placeholder="First name"
                          onChange={this.handleChange}
                      />
                    </Grid.Column>
                    <Grid.Column width={6}>
                      <Form.Input
                          label="Last Name"
                          name="lastName"
                          type="lastName"
                          placeholder="Last name"
                          onChange={this.handleChange}
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={6}>
                      <Form.Input
                          label="Email"
                          icon="user"
                          iconPosition="left"
                          name="email"
                          type="email"
                          placeholder="E-mail address"
                          onChange={this.handleChange}
                      />
                    </Grid.Column>
                    <Grid.Column width={6}>
                      <Form.Input
                          label="Password"
                          icon="lock"
                          iconPosition="left"
                          name="password"
                          placeholder="Password"
                          type="password"
                          onChange={this.handleChange}
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                      <Form.Button content="Submit"/>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={14}>
                      <Message>
                        Already have an account? Login <Link to="/signin">here</Link>
                      </Message>
                    </Grid.Column>
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
