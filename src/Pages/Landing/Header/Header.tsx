import React from 'react';
import * as styles from './styles.module.css';
import BackgroundAnimation from './BackgroundAnimation';
import CircularProgress from './CircularProgress';

function Header() {
    return (
        <header className={styles.header}>
            <BackgroundAnimation/>
            <div className={styles.header_progress}>
                <CircularProgress width='650px' height='650px' strokeWidth={'4px'}/>                
            </div>

            <section className={styles.header_intro}>
                <h1 className={styles.header_title}>
                    Skill Tracker
                </h1>
                <h2 className={styles.header_desc}>
                   Track your growth, master your skills.
                </h2>
            </section>
        </header>
    )
}

export default Header;