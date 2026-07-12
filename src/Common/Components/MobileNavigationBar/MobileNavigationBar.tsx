import React from 'react';
import * as styles from './styles.module.css';
import icons from './icons';
import globalIcons from '~/Common/icons';
import {motion, useCycle, AnimatePresence} from 'framer-motion';

function MobileNavigationBar() {
    const [open, setOpen] = useCycle(false, true);

    const overlayVariants = {
        hidden: {opacity: 0},
        show: {opacity: 1, transition: {duration: 0.5}},
        exit: {opacity:0, transition: {when: 'afterChildren', duration: 0.5}}
    };

    const menuVariants = {
        hidden: {clipPath: 'circle(10px at 40px 40px)'},
        show: {clipPath: 'circle(100%)', transition: {duration: 0.5, staggerChildren: 0.4, when: 'beforeChildren'}},
        exit: {clipPath: 'circle(10px at 40px 40px)', transition: {duration: 0.5}}
    };

    const buttonVariants = {
        hidden: {
            opacity: 0,
            x: -50
        },
        show: {
            opacity: 1,
            x: 0,
        }
    }

    const handleOpen = () => {
        setOpen();
    }

    return (
        <>
            <nav className={styles.nav}>
                <button className={styles.nav_button} onClick={handleOpen}>
                    <img src={icons['bars']}/>
                </button>
            </nav>
            <AnimatePresence>
                {open && 
                    <motion.section 
                        className={styles.overlay} 
                        variants={overlayVariants}
                        initial={'hidden'} 
                        animate={'show'}
                        exit={'exit'}>
                            <motion.aside 
                                className={styles.menu}
                                variants={menuVariants}
                                >
                                    <button className={styles.menu_close} onClick={handleOpen}>
                                        <img src={globalIcons['close']}/>
                                    </button>
                                    <button className={styles.menu_home}>
                                        <img src={globalIcons['logo']}/>
                                        SkillTrack
                                    </button>
                                    <motion.button className={styles.menu_session} variants={buttonVariants}>
                                        + Log Session
                                    </motion.button>
                                    <motion.button className={styles.menu_account} variants={buttonVariants}>
                                        JD
                                    </motion.button>
                            </motion.aside>
                    </motion.section>  
                }                  
            </AnimatePresence>
    
        </>

    )
}

export default MobileNavigationBar;