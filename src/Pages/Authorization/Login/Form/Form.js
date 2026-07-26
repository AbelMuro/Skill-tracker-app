import React from 'react';
import {motion} from 'framer-motion';
import EnterEmail from '~/Common/Components/EnterEmail';
import EnterPassword from '~/Common/Components/EnterPassword';
import * as styles from './styles.module.css';

function Form() {
    return(
        <motion.form layout className={styles.form}>
            <EnterEmail/>
            <EnterPassword/>
            <motion.button layout className={styles.submit}>
                Submit
            </motion.button>
        </motion.form>            
    )
}

export default Form;