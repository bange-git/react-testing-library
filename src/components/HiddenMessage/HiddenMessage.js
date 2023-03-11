import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

const Fade = (props) => {
  return (
    <CSSTransition unmountOnExit timeout={1000} classNames="fade" {...props} />
  );
};

const HiddenMessage = ({ children }) => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow((S) => !S);
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <Fade in={show}>
        <div>{children}</div>
      </Fade>
    </div>
  );
};

export default HiddenMessage;
