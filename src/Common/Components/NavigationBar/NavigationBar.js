import React from 'react';
import * as styles from './styles.module.css';
import icons from './icons';
import {useMediaQuery} from '~/Common/Hooks';

function NavigationBar() {
    const [mobile] = useMediaQuery('(max-width: 600px)');

    return (
        <nav className={styles.nav}>
            <button className={styles.nav_logo}>
                <img src={icons['logo']}/>
                SkillTrack
            </button>

            <div className={styles.nav_buttons}>
                <button className={styles.nav_session}>
                    + Log Session
                </button>
                <button className={styles.nav_account}>
                    JD
                </button>
            </div>
        </nav>
    )
}

export default NavigationBar;