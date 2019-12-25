import React from 'react';
import logo from '../logo.svg';
import './Header.scss';

const Header: React.FC = () => {
    return (
        <div className="header">
            <div className={'header-left'}>
                <img src={logo} alt="logo" height='10px' width='10px'/>
            </div>
            <div className="header-right">
                <a href="/">Home</a>
                <a href="/aboutus">About Me</a>
                <a href="/contactme">Contact Me</a>
            </div>
        </div>
    );
}

export default Header;
