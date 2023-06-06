import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Input } from 'antd';

import { UserOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined, CloseOutlined  } from '@ant-design/icons';

function Login() {
  // стейты для хранения значения input
  const [username, setUsername] = useState ('');
  const [password, setPassword] = useState ('');

  //стейты  валидности данных
  const [isValidUsername, setValidUsername] = useState (false);   
  const [isValidPassword, setValidPassword] = useState (false);
  const isValidForm = isValidUsername && isValidPassword;

  // стейты  для пустых input
  const [isEmptyUsername, setEmptyUsername] = useState (true);
  const [isEmptyPassword, setEmptyPassword] = useState (true);

  // стейты при потери фокуса в input
  const [isBlurUsername, setBlurUsername] = useState(false);
  const [isBlurPassword, setBlurPassword] = useState(false);

  //стейт для отображения отправки формы
  const [isSubmitted, setSubmitted ] = useState(false);

  function usernameChange(event) {
    setUsername(event.target.value);
    setEmptyUsername(event.target.value.length === 0);
    setValidUsername(event.target.value.length >= 2); 
  }

  function passwordChange(event) {
    setPassword(event.target.value);
    setValidPassword(event.target.value.length >=4);
    setEmptyPassword(event.target.value.length === 0);
  }

  function usernameBlur() {
  setBlurUsername(true);
  }

  function passwordBlur() {
  setBlurPassword(true);
  }

  function handleSubmetted(event) {
  event.preventDefault();
  setSubmitted(true);
  }

  return(
    <form  onSubmit={handleSubmetted} action ="" method="post" className="form"> {/*указать данные страницы, где будет обрабатываться форма*/}
      <div className='form_login'>
        
        <Link to="/form">  <CloseOutlined  className="close_cross_login"/></Link> 
        <h2>LOGIN</h2>

        <div className="username_block">
          <Input placeholder="Username" prefix={<UserOutlined />}  className="log_input"
              value={username}
              onChange={usernameChange}
              onBlur ={usernameBlur} />
          {(isEmptyUsername && isBlurUsername && !isValidUsername && <p className="error-message">*required field</p>) ||
              (!isValidUsername && isBlurUsername && <p className="error-message">*minimum 2 characters</p>)}
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

        <div className="submit_block"> 
          <button type="submit" className='button_login' disabled={!isValidForm}>LOGIN </button> 
          {isSubmitted && (<p className="success-message">Logged in successfully!</p> )}
        </div>
        
      </div>  
    </form>
  )
}
export default Login;