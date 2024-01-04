import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Transition = ({ children, ...props }) => {
  return (
    <CSSTransition
      classNames="fade"
      timeout={300}
      {...props}
    >
      {children}
    </CSSTransition>
  );
};

export default Transition;
