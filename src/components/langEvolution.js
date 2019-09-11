import React, { Component } from 'react';
import Section from './shared/section';
import langs from '../assets/langs.jpg';

export default function() {
    return (
        <Section className="lang-evol-section" icon="area-chart" title="Evolution Langages de Programmation">
        <img src={langs} style={{
            objectFit: 'cover',
            objectPosition: '50% -60px',
            width: '100%',
            marginBottom: '-80px',
        }}></img>
        </Section>
    );
};
