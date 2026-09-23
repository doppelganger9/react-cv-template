import * as React from 'react'
import { ProfileContainer } from './profileContainer'
import { ExperienceChart } from './experienceChart'
import { ContactDetails } from './contactDetails'
import { EducationDetails } from './educationDetails'
import { LanguageDetails } from './languageDetails'
import { Interests } from './interests'
import { QrCode } from './qrCode'
import { type IProfileHead, type IProfileLinks, type IProfile } from '../../data/profile'

function renderInterests ({ interests }): JSX.Element | null {
  if (interests == null) {
    return null
  }
  return (<Interests list={interests.list} title={interests.sectionTitle} />)
}

function renderLanguages ({ languages }): JSX.Element | null {
  return languages != null ? (<LanguageDetails list={languages.list} title={languages.sectionTitle} />) : null
}

function renderEducationDetails ({ educationDetails }): JSX.Element | null {
  if (educationDetails == null) {
    return null
  }
  return (<EducationDetails list={educationDetails.list} title={educationDetails.sectionTitle} />)
}

function renderOpenSourcePart (): JSX.Element | null {
  return (
    <div className="container-block">
      <a href="https://github.com/doppelganger9/react-cv-template" target="_blank" rel="noreferrer noopener">
        Le code source de ce CV est disponible sur GitHub
      </a>
    </div>
  )
}

function renderProfileContainer (props: IProfileHead): JSX.Element | null {
  const { name, title, availability, imagePath } = props

  return (
    <ProfileContainer
      name={name}
      title={title}
      availability={availability}
      imagePath={imagePath}
    />
  )
}

function renderContactDetails (props: IProfileLinks): JSX.Element | null {
  const {
    mail, phoneNumber, website, city, linkedin, github, gitlab, codepen, stackoverflow, twitter
  } = props
  return (
    <ContactDetails
      mail={mail}
      phoneNumber={phoneNumber}
      website={website}
      city={city}
      linkedin={linkedin}
      github={github}
      gitlab={gitlab}
      codepen={codepen}
      stackoverflow={stackoverflow}
      twitter={twitter}
    />
  )
}

export function Sidebar (props: IProfile): JSX.Element | null {
  return (
    <div className="sidebar-wrapper">
      {renderProfileContainer(props)}
      <ExperienceChart />
      {renderContactDetails(props)}
      {renderEducationDetails(props)}
      {renderLanguages(props)}
      {renderInterests(props)}
      {QrCode()}
      {renderOpenSourcePart()}
    </div>
  )
}
