import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Input, Checkbox} from 'antd';

import { UserOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined, CloseOutlined, MailOutlined  } from '@ant-design/icons';

function Sign() {
  // стейты для хранения значения input
  const [username, setUsername] = useState ('');
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [confirm, setConfirm] = useState ('');
  const [checkbox, setCheckbox] = useState(false);

  //стейты  валидности данных
  const [isValidUsername, setValidUsername] = useState (false); 
  const [isValidEmail, setValidEmail] = useState (false); 
  const [isValidPassword, setValidPassword] = useState (false);
  const [isValidConfirm, setValidConfirm] = useState (false);
  const isValidForm = isValidUsername && isValidEmail && isValidPassword && isValidConfirm  && checkbox;

  // стейты  для пустых input
  const [isEmptyUsername, setEmptyUsername] = useState (true);
  const [isEmptyEmail, setEmptyEmail] = useState (true);
  const [isEmptyPassword, setEmptyPassword] = useState (true);
  const [isEmptyConfirm, setEmptyConfirm] = useState (true);

  // стейты при потери фокуса в input
  const [isBlurUsername, setBlurUsername] = useState(false);
  const [isBlurEmail, setBlurEmail] = useState(false);
  const [isBlurPassword, setBlurPassword] = useState(false);
  const [isBlurConfirm, setBlurConfirm] = useState(false);

  //стейт для отображения отправки формы
  const [isSubmitted, setSubmitted ] = useState(false);
  
  function usernameChange(event) {
    setUsername(event.target.value);
    setEmptyUsername(event.target.value.length === 0);
    setValidUsername(event.target.value.length >= 2);
  }

  function emailChange(event) {
    setEmail(event.target.value);
    setEmptyEmail(event.target.value.length === 0);
    // setValidEmail(event.target.value.includes('@'));      простой вариант валидации
    const regex = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;  
    setValidEmail(regex.test(event.target.value));
  }

  function passwordChange(event) {
    setPassword(event.target.value);
    setValidPassword(event.target.value.length >=4);
    setEmptyPassword(event.target.value.length === 0);
  }

  function confirmChange(event) {
    setConfirm(event.target.value);
    setValidConfirm(event.target.value===password);
    setEmptyConfirm(event.target.value.length === 0);
  }

  function checkboxChange() {
    setCheckbox(!checkbox);
   }

  function usernameBlur() {
    setBlurUsername(true);
  }

  function emailBlur() {
    setBlurEmail(true);
    }

  function passwordBlur() {
    setBlurPassword(true);
  }

  function confirmBlur() {
    setBlurConfirm(true);
    }

  function handleSubmetted(event) {
    event.preventDefault();
    setSubmitted(true);
    }
  
  return(
    <form onSubmit={handleSubmetted} action =""  method="post" className="form">   {/*указать данные страницы, где будет обрабатываться форма*/}
      <div className='form_sign'>
        
        <Link to="/"> <CloseOutlined  className="close_cross_sign"/> </Link> 
        <h2 className="sign_title">SIGN UP</h2>

        <div className="username_block">
          <Input placeholder="Username" prefix={<UserOutlined />}  className="log_input"
              value={username}
              onChange={usernameChange}
              onBlur ={usernameBlur} />
          {(isEmptyUsername && isBlurUsername && !isValidUsername && <p className="error-message">*required field</p>) ||
              (!isValidUsername && isBlurUsername && <p className="error-message">*minimum 2 characters</p>)}
        </div>

        <div className="email_block">
          <Input placeholder="Email" prefix={<MailOutlined />}  className="log_input"
              value={email}
              onChange={emailChange}
              onBlur ={emailBlur} />
          {(isEmptyEmail && isBlurEmail && !isValidEmail && <p className="error-message">*required field</p>) ||
              (!isValidEmail && isBlurEmail && <p className="error-message">*invalid format</p>)}
        </div>

        <div className="password_block">
          <Input.Password  placeholder="Password" prefix={<LockOutlined />}   className="log_input" 
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}  
              value={password}
              onChange={passwordChange}
              onBlur ={passwordBlur} />
          {(isEmptyPassword && isBlurPassword && <p className="error-message">*required field</p>) ||
              (!isValidPassword && isBlurPassword && <p className="error-message">*minimum 4 characters</p> )}  
        </div>

        <div className="confirm_block">
          <Input.Password  placeholder="Confirm password" prefix={<LockOutlined />}   className="log_input" 
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}  
              value={confirm}
              onChange={confirmChange}
              onBlur ={confirmBlur} />
          {(isEmptyConfirm && isBlurConfirm && <p className="error-message">*required field</p>) ||
              (!isValidConfirm && isBlurConfirm && <p className="error-message">*password does not match</p> )}  
        </div>

        <Checkbox className="checkbox" 
            checked={checkbox}
            onChange={checkboxChange}> agree with the terms</Checkbox>     

        <div className="submit_block"> 
          <button type="submit" className='button_sign' disabled={!isValidForm}>SIGN UP </button> 
          {isSubmitted && (<p className="success-message"> Registered successfully!</p> )}
        </div>
      </div>  
    </form>
  )
}

export default Sign;