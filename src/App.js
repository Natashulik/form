import React from 'react';
import Home from './Home';
import LoginForm from './LoginForm';
import SignForm from './SignForm';
import { Routes, Route} from "react-router-dom";

function App() {

  return( 
    <div className='wrapper'>
      <div className="container"> 
        <Routes>
          <Route path="/form" element={<Home />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/signform" element={<SignForm />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
