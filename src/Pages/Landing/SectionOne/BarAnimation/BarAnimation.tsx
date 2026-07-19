import React from 'react';
import * as styles from './styles.module.css';
import {motion} from 'framer-motion';

function BarAnimation() {
    return(
        <section className={styles.container}>
            <motion.div className={styles.bar} 
                initial={{scaleY: 0}}
                whileInView={{scaleY: 1}}
                transition={{duration: 1}}
                viewport={{once: true}}
                >
            </motion.div>
            <motion.div className={styles.bar} 
                initial={{scaleY: 0}}
                whileInView={{scaleY: 1}}
                transition={{duration: 1, delay: 0.6}}
                viewport={{once: true}}
                >
            </motion.div>
            <motion.div className={styles.bar} 
                initial={{scaleY: 0}}
                whileInView={{scaleY: 1}}
                transition={{duration: 1, delay: 1}}
                viewport={{once: true}}
                >
            </motion.div>
            <motion.div className={styles.bar} 
                initial={{scaleY: 0}}
                whileInView={{scaleY: 1}}
                transition={{duration: 1, delay: 1.4}}
                viewport={{once: true}}
                >
            </motion.div>
        </section>
    )
}

export default BarAnimation;