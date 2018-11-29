import React from 'react';
import { Grid } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    return (
        <footer>
          <div className="footer-background">
            <Grid container rows="three">
              <Grid.Row centered>
                Team Interaction ICS 414&nbsp;
                |&nbsp;
                University of Hawaii&nbsp;
                |&nbsp;
                Honolulu, HI 96822&nbsp;
                |&nbsp;
                <Link activeClassName="active" exact to="/contactus" key='contactus'>
                  Contact Us</Link>
              </Grid.Row>
            </Grid>
          </div>
        </footer>
    );
  }
}

export default Footer;
