import React from 'react';
import { withRouter } from 'react-router';
import Toolbar from '../Toolbar';
import MyEditor from '../MyEditor';
import Proptypes from 'prop-types';
import { Grid, Header, Segment } from 'semantic-ui-react';


class Document extends React.Component {
  render() {
    return (
      <div style={styles.height}>

      <Grid>
        <Grid.Column width={12}>
          <Header as='h1'>File Name</Header>
        </Grid.Column>
        <Grid.Column width={3}>
            <Header as='h1'>User PlaceHolder</Header>
        </Grid.Column>

      </Grid>

      <Toolbar/>

      <Grid columns={2} divided>
        <Grid.Row >
          <Grid.Column width={12}>
            <MyEditor/>
          </Grid.Column>
          <Grid.Column width={3}>
            <Segment>1</Segment>
            <Segment>2</Segment>
            <Segment>3</Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>


      </div>
    );
  }
}

const styles = {
  height: {
    height:'100%',
  }
};

Document.propTypes = {
  // housings: PropTypes.object,
  // ready: PropTypes.bool.isRequired,
};

export default withRouter(Document);
