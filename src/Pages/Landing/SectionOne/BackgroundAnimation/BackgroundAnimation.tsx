import React from 'react';
import * as styles from './styles.module.css';
import {motion} from 'framer-motion';

function BackgroundAnimation() {
    return (
        <section className={styles.container}>
            <motion.div 
                initial={{top: '10px', right: '50px'}}
                animate={{
                    top: ['10px', '240px', '400px', '260px', '280px', '10px'],
                    right: ['50px', '280px', '320px', '290px', '220px', '50px'],
                    transition: {duration: 10, repeat: Infinity}
                }}
                className={styles.glow}></motion.div>
        </section>
    )
}

export default BackgroundAnimation;