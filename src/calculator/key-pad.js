import React, { Component } from 'react';
import Button from './button';
import map from 'lodash/map';

const KeyPad = ({onClick}) => {
  const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  return (
    <div className="row key-pad-container">
    {
      map(numbers, (number, index) => (
        <Button
          key={index}
          content={number}
          onClick={() => {onClick(number)}}
          styleClassName={"col-4"}
        />
      ))
    }
    </div>
  );
}

export default KeyPad;
