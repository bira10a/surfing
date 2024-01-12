import React from 'react';

import Logo from '../img/logo.svg';

class HeaderItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <li className='header__item'>
                <a href='#'> {this.props.descr} </a>
            </li> 
        )
    }
}

const Header = () => {
    return (
        <>
            <header className='header'>
                <div className='header__container'>
                    <a href='#'>
                        <img src={Logo} loading='lazy' width='110' height='110' alt='logo'></img>
                    </a>

                    <ul className='header__list'>
                        <HeaderItem descr='Главная' />
                        <HeaderItem descr='О нас' />
                        <HeaderItem descr='Места' />
                        <HeaderItem descr='Контакты' />
                        <HeaderItem descr='Баня' />
                    </ul>
                </div>
            </header>
        </>
    )
};

export default Header;