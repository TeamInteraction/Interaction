import React from 'react';
import { MessageSchema } from '../../api/message';
import { Segment } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';


class AddMessage extends React.Component {

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.render = this.render.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
    this.formRef = null;
  }

  insertCallback(error) {
    if (!error) {
      this.formRef.reset();
    }
  }

  submit(data) {
        // package and inster to database
  }

  render() {


    return (
        <AutoForm label="" ref={(ref) => { this.formRef = ref; }} schema={MessageSchema} onSubmit={this.submit}>
          <Segment>
            <TextField name='message'/>
            <SubmitField value='Send'/>
            <ErrorsField/>
            <HiddenField name='groupId' value='test'/>
            <HiddenField name='members' value=''/>
            <HiddenField name='createdAt' value={new Date()}/>
            <HiddenField name='username' value='test'/>
            <HiddenField name='image' value='test'/>
          </Segment>
        </AutoForm>
    );
  }
}

AddMessage.propTypes = {};

export default AddMessage;