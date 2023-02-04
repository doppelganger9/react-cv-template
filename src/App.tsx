import * as React from 'react'
import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css?inline'
// styles are loaded but not the fonts?
import fontAwesomeStyles from 'font-awesome/css/font-awesome.css?inline'
import themeStyles from './assets/theme/styles-5.css?inline'
import appStyles from './App.css?inline'

import { Experiences } from './components/experiences'
import { Section } from './components/shared/section'
import { LangEvolution } from './components/langEvolution'
import { DoneThisAndThat } from './components/doneList'
import { AppsImagesPortfolio } from './components/imagesAppPortfolio'
import { Sidebar } from './components/sidebar'
import { Tags } from './components/tags'
import { type IData } from './data'

function renderExperiencesSection (props: IData): JSX.Element | null {
  const { experiences } = props
  if (experiences == null) {
    return null
  }
  return (
    <Experiences {...experiences} />
  )
}

function renderTags (props: IData): JSX.Element | null {
  const { tags } = props
  if (tags == null) {
    return null
  }
  return (
    <Tags {...tags} />
  )
}

function renderCareerProfile (props: IData): JSX.Element {
  const { careerProfile } = props
  const { icon, sectionTitle, description } = careerProfile
  const innerContent = (<div className="summary" dangerouslySetInnerHTML={{ __html: description ?? '' }} />)
  return (
    <Section
      className="summary-section"
      icon={icon ?? 'user'}
      title={sectionTitle ?? 'Career Profile'}
    >
      {innerContent}
    </Section>
  )
}

export function CVApp (props: IData): JSX.Element {
  const { profile } = props

  return (
    <div>
      <style>
        {bootstrapStyles.replaceAll('body', ':host')}
      </style>
      <style>
        {fontAwesomeStyles.replaceAll('body', ':host')}
      </style>
      <style>
        {themeStyles.replaceAll('body', ':host')}
      </style>
      <style>
        {appStyles.replaceAll('body', ':host')}
      </style>
      <div className="wrapper">
        <Sidebar
          {...profile}
        />
        <div className="main-wrapper">
          {renderCareerProfile(props)}
          <LangEvolution />
          {renderExperiencesSection(props)}
          <AppsImagesPortfolio />
          {renderTags(props)}
          <DoneThisAndThat list={[...props.doneList]} />
        </div>
      </div>
    </div>
  )
}
