import React from 'react';
import { withRouter } from 'react-router';
import { Menu, Dropdown } from 'semantic-ui-react';
import jsPDF from 'jspdf';


class Document extends React.Component {

  print(){
    // var content = document.getElementById("firepad-container");
    var content = CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: true,
    matchBrackets: true,
    mode: "text/x-csrc"
  }).getValue();
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

        <Menu.Item onClick={this.print}>
          Print
        </Menu.Item>

        <Menu.Item onClick={this.download}>
          Download
        </Menu.Item>


        </Menu>

          <iframe id="toprint" style={{height: '0px', width: '0px', position: 'absolute'}}></iframe>

      </div>

    );
  }
}

export default withRouter(Document);
