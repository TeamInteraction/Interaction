import React from 'react';
import { Grid, List, Container } from 'semantic-ui-react';

/** Renders the Page for adding a document. */
export default class ContactUs extends React.Component {
  render() {
    return (
        <Grid centered>
          <Grid.Column width={12}>
            <Container className="editprofile-container">
              <Grid centered>
                <Grid.Row>
                  <Grid.Column width={3}>
                    Eugene Lao
                    <hr/>
                  
                  </Grid.Column>
                  <Grid.Column width={3}>
                    Jonathan Lau
                    <hr/>
                   
                  </Grid.Column>
                  <Grid.Column width={3}>
                    Akira Vernon
                    <hr/>
                    
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Grid.Column>
        </Grid>
    );
  }
}

