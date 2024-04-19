import {FC} from 'react'

import logo from '../../assets/stackline_logo.svg';
import './Header.scss';

/**
 * A component for header and logo at top of webpage
 */
const Header: FC = () => {
  return (
    <div className='header' >
      <img src={logo} className="header-logo" alt="logo" />
    </div>
  )
}

export default Header