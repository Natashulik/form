import React from "react";
import Login from "./Login";
import ContSign from "./ContSign";
import {CSSTransition } from 'react-transition-group';

function LoginForm() {
  return(  
    <>
      <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames='animation' >
        <Login className='animation-enter'/>
      </CSSTransition>
        <ContSign/>
    </>
  )
}

export default LoginForm;