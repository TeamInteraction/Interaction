import React from 'react';
import { withRouter } from 'react-router';
import { Menu, Dropdown } from 'semantic-ui-react';
import jsPDF from 'jspdf';


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

  download(){
    var doc = new jsPDF();
    var content = document.getElementById("test");
    doc.fromHTML( content, 15, 15, { 'width': 180});
    doc.save('test.pdf');
  }



  render() {
    return (
      <div>
        <Menu>
        <Dropdown text='File' pointing className='item' icon={null}>
          <Dropdown.Menu>
            <Dropdown.Item text='Rename...' description='crtl + r'/>
            <Dropdown.Item text='Print' onClick={this.print}/>
            <Dropdown.Item text='Download/Export As' onClick={this.download}/>
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

          <iframe id="toprint" style={{height: '0px', width: '0px', position: 'absolute'}}></iframe>

      </div>

    );
  }
}

export default withRouter(Document);
