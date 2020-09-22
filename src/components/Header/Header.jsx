import React from 'react';
import styles from "./Header.module.css";


const Header = () => {
    return (
        <div className={styles.header}>
            <img className={styles.logo}
                 src="https://st3.depositphotos.com/5948652/12973/v/950/depositphotos_129735402-stock-illustration-letter-b-eagle-head-logo.jpg"
                 alt="logo"></img>
            BD Chat
        </div>
    )
}

export default Header;