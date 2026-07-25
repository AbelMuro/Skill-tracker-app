import React from 'react';
import icons from './icons';
import * as styles from './styles.module.css';

function Footer() {
    return (
        <footer className={styles.container}>
            <ul className={styles.content}>
                <li>
                    <p>
                        Sponsors
                    </p>
                </li>
                <li>
                    <img src={icons['github']}/>
                    Github
                </li>
                <li>
                    <img src={icons['amazon']}/>
                    Amazon
                </li>
                <li>
                    <img src={icons['facebook']}/>
                    Facebook
                </li>
            </ul>
        </footer>
    )
}

export default Footer;