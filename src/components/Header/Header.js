import React from 'react';

import Logo from '../../img/logo.svg';

const Header = () => {
    return (
        <>
            <header className='header'>
                <div className='header__container'>
                    <a href='#'>
                        <img src={Logo} loading='lazy' width='110' height='110' alt='logo'></img>
                    </a>

                    <ul className='header__list'>
                        <li className='header__item'>
                            <a href='#'>Главная</a>
                        </li>
                        <li className='header__item'>
                            <a href='#'>О нас</a>
                        </li>
                        <li className='header__item'>
                            <a href='#'>Места</a>
                        </li>
                        <li className='header__item'>
                            <a href='#'>Контакты</a>
                        </li>
                        <li className='header__item'>
                            <a href='#'>Баня</a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
};

export default Header;