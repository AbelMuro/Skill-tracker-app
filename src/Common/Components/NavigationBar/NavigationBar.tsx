import React, {useEffect, useState} from 'react';
import * as styles from './styles.module.css';
import icons from '~/Common/icons';
import localIcons from './icons';
import {useMediaQuery} from '~/Common/Hooks';
import {useNavigate} from 'react-router-dom';
import MobileNavigationBar from '~/Common/Components/MobileNavigationBar';

function NavigationBar() {
    const [mobile] = useMediaQuery('(max-width: 600px)');
    const [accountButton, setAccountButton] = useState<string>('Login');
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    }

    const checkLoginStatus = async () => {
        try{
            const response = await fetch('http://localhost:4000/authorize-user', {
                method: 'GET',
                credentials: 'include'
            });

            const results = await response.text();
            console.log(results);

            if(response.status === 200)
                setAccountButton('Account')
            else
                setAccountButton('Login');
        }
        catch(error : any){
            const message = error.message;
            console.log(message);
        }
    }

    useEffect(() => {
        checkLoginStatus();
    }, [])

    return mobile ? <MobileNavigationBar/> : (
        <nav className={styles.nav}>
            <button className={styles.nav_logo}>
                <img src={icons['logo']}/>
                SkillTrack
            </button>
            <div className={styles.nav_buttons}>
                <button className={styles.nav_session}>
                    + Log Session
                </button>
                {
                    accountButton === 'Account' ?                 
                        <button className={styles.nav_account}>
                            JD
                        </button> : 
                        <button className={styles.nav_account} onClick={handleLogin}>
                            <img src={localIcons['account']}/>
                        </button>
                }
            </div>
        </nav>
    )
}

export default NavigationBar;