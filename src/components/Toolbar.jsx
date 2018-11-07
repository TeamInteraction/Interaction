import React from 'react';
import { withRouter } from 'react-router';
import { Menu, Dropdown, Image, Icon, Button, Loader } from 'semantic-ui-react';


class Document extends React.Component {

  print(){
    var content = document.getElementById("test");
    var pri = document.getElementById("toprint").contentWindow;
    pri.document.open();
    pri.document.write(content.innerHTML);
    pri.document.close();
    pri.focus();
    pri.print();
  }



  render() {
    return (
      <div>
        <Menu>
        <Dropdown text='File' pointing className='item' icon={null}>
          <Dropdown.Menu>
            <Dropdown.Item text='Rename...' description='crtl + r'/>
            <Dropdown.Item text='Print' onClick={this.print}/>
            <Dropdown.Item text='Download/Export As'/>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown text='Edit' pointing className='item' icon={null}>
          <Dropdown.Menu>
            <Dropdown.Item text='Undo' description='crtl + z'/>
            <Dropdown.Item text='Redo' description='crtl + y'/>
            <Dropdown.Divider/>
            <Dropdown.Item text='Cut' description='crtl + x'/>
            <Dropdown.Item text='Copy' description='crtl + c'/>
            <Dropdown.Item text='Paste' description='crtl + v'/>
            <Dropdown.Divider/>
            <Dropdown.Item text='Find and Replace'/>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown text='Format' pointing className='item' icon={null}>
          <Dropdown.Menu>
            <Dropdown.Item text='Bold' />
            <Dropdown.Item text='Italic' />
            <Dropdown.Item text='Underline' />
            <Dropdown.Divider/>
            <Dropdown.Item text='Font' />
            <Dropdown.Item text='Font Size'/>
            <Dropdown.Item text='Font Color'/>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item>
          Changes
        </Menu.Item>

        </Menu>

          <h1 id="test">Toolbar page</h1>
          <iframe id="toprint" style={{height: '0px', width: '0px', position: 'absolute'}}></iframe>

      </div>

    );
  }
}

export default withRouter(Document);
