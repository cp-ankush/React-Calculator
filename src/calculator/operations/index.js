import React, { Component } from 'react';
import AdditionButton from './addition';
import SubtractionButton from './subtraction';
import MultiplicationButton from './multiplication';
import DivisionButton from './division';
import EqualToButton from './equal-to-button'

const Operations = ({
  data,
  onClick,
}) => {
  return (
    <div className="operations">
      <DivisionButton
        data={data}
        onClick={onClick}
      />
      <SubtractionButton
        data={data}
        onClick={onClick}
      />
      <AdditionButton
        data={data}
        onClick={onClick}
      />
      <MultiplicationButton
        data={data}
        onClick={onClick}
      />
      <EqualToButton
        data={data}
        onClick={onClick}
      />
    </div>
  );
}

export default Operations;
