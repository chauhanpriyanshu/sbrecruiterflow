import React from 'react';
import Logo_MyJobs from '../assets/images/logo-myjobs.svg'

function Header({ children }) {
  return (
    <div className='mj-header'>
        <img className='mj-logo' src={Logo_MyJobs} alt="logo" />
        { children }
    </div>
  );
}

export default Header;
