import React from 'react'

import logo from './assets/stackline_logo.svg';

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='header' >
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  )
}

export default Header