import React from 'react';
import {useTypedSelector} from '~/Store';
import * as styles from './styles.module.css';

function ToastMessage() {
    const display = useTypedSelector<boolean>(state => state.toast.display);
    const message = useTypedSelector<string>(state => state.toast.message);

    return display && (
        <dialog className={styles.toast} open={true}>
            {message}
        </dialog>
    )
}

export default ToastMessage;