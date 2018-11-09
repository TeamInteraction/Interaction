import React from 'react';
import { withRouter } from 'react-router';
import Toolbar from '../Toolbar';
import MyEditor from '../MyEditor';
import { Container, Grid, Header, Segment } from 'semantic-ui-react';
import NavBar from '../components/NavBar';
import Messenger from '../components/Messenger';


class Document extends React.Component {
  render() {
    return (
      <div style={styles.height}>
        <NavBar></NavBar>
        <Toolbar />
        <Container>
          <Grid>
            <Grid.Column width={12}>
              <Header as='h1'>File Name</Header>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as='h1'>Tools</Header>
            </Grid.Column>
          </Grid>
          <Grid columns={2} divided>
            <Grid.Row >
              <Grid.Column width={12}>
                <MyEditor />
              </Grid.Column>
              <Grid.Column width={3}>
                <Grid.Row>
                <Segment>Task 1</Segment>
                <Segment>Task 2</Segment>
                <Segment>Task 3</Segment>                  
                </Grid.Row>
                <Grid.Row>
                  <Messenger/>
                </Grid.Row>

              </Grid.Column>
            </Grid.Row>
          </Grid>
          </Container>



      </div>
    );
  }
}

const styles = {
  height: {
    height: '100%',
  }
};

Document.propTypes = {
};

export default withRouter(Document);
