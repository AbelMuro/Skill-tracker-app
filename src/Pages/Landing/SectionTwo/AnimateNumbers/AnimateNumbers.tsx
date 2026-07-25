import React, {useRef, useState} from 'react';
import {motion} from 'framer-motion';
import * as styles from './styles.module.css';

type Props = {
    quantity: number,
    desc: string,
    intervalCount: number,
}

function AnimateNumbers({quantity, desc, intervalCount} : Props) {
    const [count, setCount] = useState<number>(0);
    const enteredOnce = useRef<boolean>(false);
    const target = useRef<HTMLDivElement | null>(null);


    const animateCount = () => {
        if(enteredOnce.current) return;
        enteredOnce.current = true;

        const interval = setInterval(() => {
            setCount((prevCount) => {
                if(prevCount + 1 > quantity) {
                    clearInterval(interval);
                    return prevCount;
                }
                return prevCount + 1;
            });
        }, intervalCount)
    }

    return (
        <motion.div 
            className={styles.container} 
            onViewportEnter={animateCount}
            viewport={{once: true}}
            ref={target}>
            <p>
                {count}
            </p>
            <p>
                {desc}
            </p>
        </motion.div>
    )
}

export default AnimateNumbers;