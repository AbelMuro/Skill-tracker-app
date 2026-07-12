import React from 'react';
import * as styles from './styles.module.css';
import {motion} from 'framer-motion';

function BackgroundAnimation() {
    return (
        <div className={styles.bars}>
            <motion.div 
                className={styles.bar}
                initial={{scaleY: '0'}}
                animate={{scaleY: ['0', '1', '0', '0']}}
                transition={{repeat: Infinity, duration: 2.3}}
                ></motion.div>
            <motion.div 
                className={styles.bar}
                initial={{scaleY: '0'}}
                animate={{scaleY: ['0', '1', '0', '0']}}
                transition={{repeat: Infinity, duration: 2.3, delay: 0.2}}
                ></motion.div>
            <motion.div 
                className={styles.bar}
                initial={{scaleY: '0'}}
                animate={{scaleY: ['0', '1', '0', '0']}}
                transition={{repeat: Infinity, duration: 2.3, delay: 0.4}}
                ></motion.div>
            <motion.div 
                className={styles.bar}
                initial={{scaleY: '0'}}
                animate={{scaleY: ['0', '1', '0', '0']}}
                transition={{repeat: Infinity, duration: 2.3, delay: 0.6}}
                ></motion.div>
            <motion.div 
                className={styles.bar}
                initial={{scaleY: '0'}}
                animate={{scaleY: ['0', '1', '0', '0']}}
                transition={{repeat: Infinity, duration: 2.3, delay: 0.8}}
                ></motion.div>
            <motion.div 
                className={styles.bar}
                initial={{scaleY: '0'}}
                animate={{scaleY: ['0', '1', '0', '0']}}
                transition={{repeat: Infinity, duration: 2.3, delay: 1.0}}
                ></motion.div>
            <motion.div 
                className={styles.bar}
                initial={{scaleY: '0'}}
                animate={{scaleY: ['0', '1', '0', '0']}}
                transition={{repeat: Infinity, duration: 2.3, delay: 1.2}}
                ></motion.div>
            <motion.div 
                className={styles.bar}
                initial={{scaleY: '0'}}
                animate={{scaleY: ['0', '1', '0', '0']}}
                transition={{repeat: Infinity, duration: 2.3, delay: 1.4}}
                ></motion.div>
                        <motion.div 
                className={styles.bar}
                initial={{scaleY: '0'}}
                animate={{scaleY: ['0', '1', '0', '0']}}
                transition={{repeat: Infinity, duration: 2.3, delay: 1.6}}
                ></motion.div>
                        <motion.div 
                className={styles.bar}
                initial={{scaleY: '0'}}
                animate={{scaleY: ['0', '1', '0', '0']}}
                transition={{repeat: Infinity, duration: 2.3, delay: 1.8}}
                ></motion.div>

        </div>
    )
}

export default BackgroundAnimation;