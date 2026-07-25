import React from 'react';
import * as styles from './styles.module.css';
import Header from './Header';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import Footer from './Footer';

function Landing() {
    return (
        <>
            <Header/>
            <SectionOne/>
            <SectionTwo/>
            <Footer/>
        </>
    )
}

export default Landing;