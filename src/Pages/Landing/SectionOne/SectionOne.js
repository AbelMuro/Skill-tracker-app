import React from 'react';
import BackgroundAnimation from './BackgroundAnimation';
import BarAnimation from './BarAnimation';
import * as styles from './styles.module.css';
import icons from './icons';

function SectionOne() {
    return(
        <section className={styles.container}>
            <BackgroundAnimation/>
            <BarAnimation/>
            <article className={styles.content}>
                <p className={styles.detail}>
                    <img src={icons['skill']}/>
                    Start practicing your skill with the app.
                </p>
                <p className={styles.detail}>
                    <img src={icons['phone']}/>
                    Track progress on your phone at any time.
                </p>
                <p className={styles.detail}>
                    <img src={icons['friends']}/>
                    Show off your progress to your friends!
                </p>
            </article>
        </section>
    )
}

export default SectionOne;