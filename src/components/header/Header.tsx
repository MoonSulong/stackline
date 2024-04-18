import React from 'react'

import logo from '../../assets/stackline_logo.svg';

import './Header.scss';

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='header' >
      <img src={logo} className="header-logo" alt="logo" />
    </div>
  )
}

export default Header