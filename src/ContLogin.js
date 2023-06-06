import React from "react";
import { Button, Space } from 'antd';
import { Link } from "react-router-dom";

function ContLogin() {

  return(   
    <div className="cont_login ">
      <div className='cont_login_center'>
          <h2>LOGIN</h2>
          <p>Already have an account?</p>
          <Space direction="vertical" style={{ width: '80%' }} > 
            <Link to="/loginform" > 
            <Button type="primary"  block className='button_cont_login' >  LOGIN </Button>
            </Link> 
           </Space>
      </div>
    </div> 
  )

}
export default ContLogin;