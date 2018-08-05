import React, { Component } from 'react';
import KeyPad from './key-pad';
import Clear from './clear';
import OutputScreen from './output-screen';
import Operations from './operations'
import './styles.css';


class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = this.initializeState();
  }

  initializeState = () => ({
    operand: null,
    result: 0,
    operation: null,
    operationMethod: null,
    reset: null
  })

  updateOperand = (number) => {
    const {reset, operation, operand, result} = this.state;
    if (operation) {
      this.setState({operand: operand * 10 + number});
    } else {
      this.setState({
        result: (reset? number : (result * 10 + number)),
        reset: null
      });
    }
  }

  updateOperation = ({method, operation, result, operand, reset}) => {
    this.setState({
      operation,
      operationMethod: method,
      result: (result !==null? result : this.state.result),
      operand,
      reset
    });
  }

  clear = () => {
    this.setState(this.initializeState());
  }

  render() {
    const {operand, operation, result, operationMethod, reset} = this.state;
    return (
      <div className="calcContainer">
        <div className="row">
          <OutputScreen
            styleClassName={"output-screen col-12"}
            operand={operand}
            operation={operation}
            result={result}
          />
        </div>
        <div className="row main">
            <div className="col-9">
              <Clear onClick={this.clear}/>
              <KeyPad onClick={this.updateOperand}/>
            </div>
            <div className="col-3">
              <Operations
                data={{operand, result, operationMethod, reset}}
                onClick={this.updateOperation}
              />
            </div>
          </div>
      </div>
    );
  }
}

export default Calculator;
