import React  from "react";
import { Button, Space } from 'antd';
import { Link } from "react-router-dom";

function ContSign() {

  return(   
    <div className='cont_sign'>
      <div className='cont_sign_center'>
        <h2>SIGN UP</h2>
        <p>New here?</p>
        <Space direction="vertical" style={{ width: '80%' }}>
          <Link to="/signform">
          <Button type="primary" danger  block className='button_cont_sign'> SIGN UP</Button>
          </Link>
        </Space>
      </div>
    </div>
  )

}
export default ContSign;