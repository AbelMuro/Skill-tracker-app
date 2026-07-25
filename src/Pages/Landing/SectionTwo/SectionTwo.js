import React from 'react';
import AnimateNumbers from './AnimateNumbers';
import * as styles from './styles.module.css';

function SectionTwo() {
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <AnimateNumbers quantity={4500} desc={'Users Globally'} intervalCount={0.01}/>
                <AnimateNumbers quantity={140} desc={'Positive Reviews Given'} intervalCount={30}/>
                <AnimateNumbers quantity={230} desc={'Awards Received'} intervalCount={20}/>                
            </div>
        </section>
    )
}

export default SectionTwo;