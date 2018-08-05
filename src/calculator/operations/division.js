import React, { Component } from 'react';
import Button from '../button';

const division = (data) => {
  const {result, operand} = data;
  const response = parseFloat(result) / parseFloat(operand);
  if(Math.round(response) !== response) {
    return response.toFixed(2);
  }
  return response;
}

const DivisionButton = ({onClick, data}) => {
  return (
    <Button
      content={'÷'}
      styleClassName={"operation-button"}
      onClick={() => {
        const {operand, result, operationMethod} = data;
        let response = null;
        if (operationMethod && operand !== null) {
          console.log("...coming...");
          response = operationMethod(data);
        }
        const updatedData = {
          method: result !== null? division : null,
          operation: result !== null? '÷' : null,
          result: response,
          operand: null,
          reset: null
        }
        onClick(updatedData);
      }}
    />
  );
}

export default DivisionButton;
