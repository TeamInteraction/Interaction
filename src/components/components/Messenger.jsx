import React from 'react';
import { Feed, Header, Grid, Segment, Comment } from 'semantic-ui-react';
import AddMessage from '../components/AddMessage';

class Messenger extends React.Component {
    render() {
        return (
            <Grid columns='equal'>
                <Grid.Row stretched>
                    <Grid.Column>
                        <Segment>
                            <Comment.Group size='small'>
                                <Header as='h3' dividing>Messages</Header>
                                <Segment>
                                    <Feed>
                                        <Feed>
                                            <Feed.Event summary='Jon' extraText='hey guys' />
                                            <Feed.Event summary='Eugene' extraText='hola' />
                                            <Feed.Event summary='Akira' extraText='sup' />

                                        </Feed>
                                    </Feed>
                                </Segment>
                                <AddMessage />
                            </Comment.Group>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

Messenger.propTypes = {};

export default Messenger;