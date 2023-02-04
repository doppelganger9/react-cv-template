import * as React from 'react'
import { Section } from './shared/section'
import generalifrAppIosUrl from '../assets/generalifr-app-ios.png'
import harmoniemutuelleAppsIosUrl from '../assets/harmoniemutuelle-apps-ios.png'

export function AppsImagesPortfolio (): JSX.Element {
  return (
    <Section
      className="apps-portfolio-section"
      icon="mobile"
      title="Applications Mobiles"
      id="applications-mobiles"
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
      <img style={{ width: '100%' }} src={generalifrAppIosUrl} alt="Application iOS Generali France" />
      <img style={{ width: '33%' }} src={harmoniemutuelleAppsIosUrl} alt="Application iOS Harmonie Mutuelle" />
    </Section>
  )
}
