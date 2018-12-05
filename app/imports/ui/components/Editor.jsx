import React from 'react';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Editors } from '/imports/api/editor/editor';

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            text: ''
        }
    }

    onChange(e, value) {
        this.setState({
            text: value.value
        });

        console.log(value);
    }

    render() {
        return (
            <div>
                <Input
                    onChange={this.onChange}
                    value={this.state.text}
                />
            </div>

        );
    }
}

/** Require a document to be passed to this component. */
Editor.propTypes = {
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Editor);
