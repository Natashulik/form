import React from "react";
import ContLogin from "./ContLogin";
import Sign from "./Sign";
import { CSSTransition } from 'react-transition-group';

function SignForm() {
  return(  
    <>
      <ContLogin/>
      <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames='animation' >
        <Sign className='animation-enter'/>
      </CSSTransition>
     
    </>
  )
}

export default SignForm;