import React, { Component } from 'react';
import Button from './button';

const Clear = ({onClick}) => {
  return (
    <Button
      content={'clear'}
      styleClassName={"clear-button"}
      onClick={onClick}
    />
  );
}

export default Clear;
