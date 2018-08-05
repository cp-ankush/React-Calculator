import React, { Component } from 'react';

const OutputScreen = ({operand, operation, result, styleClassName}) => {
  const displayResult = result !== null? result : 0;
  const displayOperand = operand !== null? operand : '';
  const totalLength = (displayResult + operation + displayOperand).length;
  return (
    <div className={styleClassName}>
    {
      (totalLength > 10)?
      <span className="overflow">Not Enough Space</span> :
      (
        operation?
        (displayResult + operation + displayOperand) :
        displayResult
      )
    }
    </div>
  );
}

export default OutputScreen;
