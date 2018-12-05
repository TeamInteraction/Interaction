import React from 'react';
import { Icon, Grid, Button, Image, Card } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';


/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  state = { image: "/images/blue.jpg" };

  changeImage = (picture) => {
    this.setState({ image: picture });
  };

  render() {
    return (
        <div>
          <div
          style={{
            background: "url('"+ this.state.image +"') no-repeat center center",
            backgroundImage: 'cover',
            height: "600px"
          }}
          className="main-image"
          >
            <Grid
                centered
                verticalAlign="middle"
                textAlign="center"
            >
              <Grid.Row
                  className="title-main"
              >
                <p  className="main-text">
                  Interaction
                </p>
              </Grid.Row>
              <Grid.Row>
              </Grid.Row>
              <Grid.Row>
                <Button
                size='massive'
                color='teal'
                as={NavLink} activeClassName="active" exact to="/groupselector"
                >
                Enter Room
                </Button>
              </Grid.Row>
            </Grid>
          </div>
          <div>
            <Grid
                columns={2}
                textAlign="center"
                style={{padding: "60px", backgroundColor: "#424B54"}}
            >
              <Grid.Column>
                <p  className="landing-header font-blue">Group Collaboration<hr/></p> 
                <p  className="landing-text font-white"></p>
              </Grid.Column>

            </Grid>

            <Grid
                textAlign="center"
                style={{padding: "60px", backgroundColor: "#ffffff"}}
            >
              <Grid.Row centered>

                <p  className="landing-text">
                Connect with your team and collaborate on a text document. Manage tasks and communicate with the integrated chatting system.
                </p>

              </Grid.Row>
            </Grid>
            <Grid
                textAlign="center"
                style={{padding: "30px", backgroundColor: "#424B54"}}
            >
              <Grid.Row>
                <p  className="landing-header font-blue"><hr/></p>

              </Grid.Row>

            </Grid>
            <Grid
                columns={3}
                textAlign="center"
                style={{padding: "60px", backgroundColor: "#ffffff"}}
            >
              <Grid.Column centered>
                <Icon name="edit" size="huge"></Icon>

              </Grid.Column>
              <Grid.Column>
                <Icon name="users" size="huge"></Icon>
              </Grid.Column>
              <Grid.Column>
                <Icon name="home" size="huge"></Icon>
              </Grid.Column>

            </Grid>
          </div>


        </div>
    );
  }
}

export default Landing;
