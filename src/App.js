import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ''
    }
  }


  render() {
    return (
      <div className="App">
        <Table>
          <thead>
            <tr>
              <th colSpan="3">{this.state.result}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Button onClick={() => { this.setState({result: this.state.result + "7"}) }}>7</Button></td>
              <td><Button onClick={() => { this.setState({result: this.state.result + "8"}) }}>8</Button></td>
              <td><Button onClick={() => { this.setState({result: this.state.result + "9"}) }}>9</Button></td>
              <td><Button onClick={() => { this.setState({result: this.state.result + "+"})  }}>+</Button></td>
            </tr>
            <tr>
              <td><Button onClick={() => { this.setState({result: this.state.result + "4"}) }}>4</Button></td>
              <td><Button onClick={() => { this.setState({result: this.state.result + "5"}) }}>5</Button></td>
              <td><Button onClick={() => { this.setState({result: this.state.result + "6"}) }}>6</Button></td>
              <td><Button onClick={() => { this.setState({result: this.state.result + "-"})  }}>-</Button></td>
            </tr>
            <tr>
              <td><Button onClick={() => { this.setState({result: this.state.result + "1"}) }}>1</Button></td>
              <td><Button onClick={() => { this.setState({result: this.state.result + "2"}) }}>2</Button></td>
              <td><Button onClick={() => { this.setState({result: this.state.result + "3"}) }}>3</Button></td>
              <td><Button onClick={() => { this.setState({result: this.state.result + "*"})  }}>*</Button></td>
            </tr>
            <tr>
              <td><Button onClick={() => { this.setState({result: ''}) }}>C</Button></td>
              <td><Button onClick={() => { this.setState({result: eval(this.state.result)}) }}>=</Button></td>
              <td><Button onClick={() => { this.setState({result: this.state.result + "7"}) }}>0</Button></td>
              <td><Button onClick={() => { this.setState({result: this.state.result + "/"})  }}>/</Button></td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}export default App;
