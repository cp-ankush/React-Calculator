import React, { Component } from 'react';
import Button from '../button';

const addition = (data) => {
  const {result, operand} = data;
  const response = parseFloat(result) + parseFloat(operand);
  if(Math.round(response) !== response) {
    return response.toFixed(2);
  }
  return response;
}

const AdditionButton = ({onClick, data}) => {
  return (
    <Button
      content={'+'}
      styleClassName={"operation-button"}
      onClick={() => {
        const {operand, result, operationMethod} = data;
        let response = null;
        if (operationMethod && operand !== null) {
          response = operationMethod(data);
        }
        const updatedData = {
          method: result !== null? addition : null,
          operation: result !== null ? '+' : null,
          result: response,
          operand: null,
          reset: null
        }
        onClick(updatedData);
      }}
    />
  );
}

export default AdditionButton;
