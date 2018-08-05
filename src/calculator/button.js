import React, { Component } from 'react';

const Button = ({content, styleClassName, onClick}) => {
  return (
    <div
      className={`button ${styleClassName}`}
      onClick={onClick}>
      {content}
    </div>

  );
}

export default Button;
