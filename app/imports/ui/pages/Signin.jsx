import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Container, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

export default class Signin extends React.Component {

  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: '', redirectToReferer: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }

  handleSubmit() {
    const { email, password } = this.state;
    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '', redirectToReferer: true });
      }
    });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    if (this.state.redirectToReferer) {
      return <Redirect to={from}/>;
    }

    const headerStyle = { marginTop: '20px' };
    return (
          <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
            <Grid.Column width={6}>
              <Container className="editprofile-container">
                <Form onSubmit={this.handleSubmit}>
                    <Header as="h2" textAlign="center">
                      Login to your account
                    </Header>
                  <Grid centered>
                    <Grid.Row>
                      <Grid.Column width={8}>
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
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={8}>
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
                      <Grid.Column width ={14}>
                        <Message>
                          Don't have an account? Regiser <Link to="/signup">here</Link>
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
                        header="Login was not successful"
                        content={this.state.error}
                    />
                )}
              </Container>
            </Grid.Column>
          </Grid>
    );
  }
}

/** Ensure that the React Router location object is available in case we need to redirect. */
Signin.propTypes = {
  location: PropTypes.object,
};
