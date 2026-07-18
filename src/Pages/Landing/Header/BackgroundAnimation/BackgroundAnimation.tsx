import React, {useEffect} from 'react';
import * as styles from './styles.module.css';
import {motion, useMotionValue} from 'framer-motion';

function BackgroundAnimation() {


    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0.482 3.668 505.476 503.792" className={styles.container}>
            <motion.path
                d="
                    M 44.36 382.342
                    l 94.979 74.516
                    l 62.537 -169.956

                    M 298.674 367.978
                    l -96.339 -80.98

                    M 505.958 3.668
                    l -207.165 364.435

                    M 43.824 382.363
                    l -43.342 125.097
                "
                fill="transparent"
                stroke="#089104"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={'978.06px'}
                initial={{strokeDashoffset: '978.06px'}}
                animate={{strokeDashoffset: '0px', transition: {duration: 3}}}
                />

        </svg>
    )
}

export default BackgroundAnimation;