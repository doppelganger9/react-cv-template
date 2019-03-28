import React, { Component } from 'react';
import Section from './shared/section';
import langs from '../assets/langs.jpg';

export default function() {
    return (
        <Section className="apps-portfolio-section"
            icon={'mobile'}
            title={'Applications Mobiles'}>
            <h5>iOS <small>- plus de 50 mises en store depuis 2011</small></h5>
            <h5>Android <small>- plus de 30 mises en store depuis 2011</small></h5>
            <hr></hr>
            <img style={{width:'100%'}} src='app-ios.png'></img>
        </Section>
    );
};
