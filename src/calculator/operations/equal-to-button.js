import React, { Component } from 'react';
import Button from '../button';

const EqualToButton = ({onClick, data}) => {
  return (
    <Button
      content={'='}
      styleClassName={"operation-button"}
      onClick={() => {
        const {operand, result, operationMethod, reset} = data;
        let response = null;
        let shouldReset = null;
        if (operationMethod && operand !== null) {
          response = operationMethod(data);
          shouldReset = true;
        }
        onClick({
          method: null,
          operation: null,
          result: response,
          operand: null,
          reset: shouldReset || reset
        });
      }}
    />
  );
}

export default EqualToButton;
