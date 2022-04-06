import React from 'react';
import styles from './navbar.module.scss';
import {menu} from "../../menu";
import logo from '../../assets/images/logo.png';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <NavLink to='/'>
                        <img src={logo} alt="logo"/>
                    </NavLink>
                </div>

                <div className={styles.menu_links}>
                    {menu.map((item) => (
                        <NavLink key={item.id} to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className={styles.menu_lang}>
                Рускиий
            </div>
        </div>
    );
};

export default Navbar;