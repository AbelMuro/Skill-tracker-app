import React, {useEffect} from 'react';
import * as styles from './styles.module.css';
import {motion, useMotionValue, useMotionTemplate, useMotionValueEvent} from 'framer-motion';

type Props = {
    width: string,
    height: string,
    strokeWidth: string,
}

function CircularProgress({width, height, strokeWidth} : Props) {
    const percent = useMotionValue(0);
    const strokeDashoffset = useMotionTemplate`calc(339.29 - (339.29 * ${percent}) / 100)`;

    useMotionValueEvent(percent, 'change', (newPercent) => {
        console.log(newPercent);
    })

    useEffect(() => {
        const interval = setInterval(() => {
            if(percent.get() + 1 > 100)
                return clearInterval(interval);
            percent.set(percent.get() + 1)
        }, 50)
    }, [])

    return (
        <svg width={width} height={height} viewBox="0 0 120 120">
            <motion.circle
                cx="60"
                cy="60"
                r="54"
                stroke="#089104"
                strokeWidth={strokeWidth}
                fill="none"
                strokeLinecap="round"
                strokeDasharray="339.29"
                style={{strokeDashoffset}}
                />
        </svg>
    )
}

export default CircularProgress;