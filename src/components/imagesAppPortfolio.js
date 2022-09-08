import React from 'react';
import Section from './shared/section';

export default function () {
  return (
    <Section
      className="apps-portfolio-section"
      icon="mobile"
      title="Applications Mobiles"
    >
      <h5>
iOS
        {' '}
        <small>- plus de 70 mises en store depuis 2011</small>
      </h5>
      <h5>
Android
        {' '}
        <small>- plus de 50 mises en store depuis 2011</small>
      </h5>
      <hr />
      <img style={{ width: '100%' }} src="generalifr-app-ios.png" alt="Application iOS Generali France" />
      <img style={{ width: '33%' }} src="harmoniemutuelle-apps-ios.png" alt="Application iOS Harmonie Mutuelle" />
    </Section>
  );
}
