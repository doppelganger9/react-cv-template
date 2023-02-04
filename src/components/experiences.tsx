import * as React from 'react'
import { type IExperience, type IExperiences } from '../data/experiences'
import { Section } from './shared/section'

function ListItem (props: { item: IExperience, i: number }): JSX.Element {
  const { item, i } = props
  return (
    <div className="item" key={`exp_item_${i}`}>
      <div className="meta">
        <div className="upper-row">
          <h3 className="job-title">{item.title}</h3>
          <div className="time">{item.date}</div>
        </div>
        {CompanySection({ company: item.company, companyLink: item.companyLink, companyShortDetail: item.companyShortDetail })}
      </div>
      <div className="details">
        <p dangerouslySetInnerHTML={{ __html: item.description }} />
      </div>
    </div>
  )
}

function CompanySection (props: { company: string, companyLink: string, companyShortDetail: string }): JSX.Element | null {
  const { company, companyLink, companyShortDetail } = props
  if (company == null || companyLink == null) {
    return null
  }
  return (
    <div className="company">
      {' '}
      <a href={companyLink} target="_blank" rel="noopener noreferrer">{company}</a>
      {' '}
      {companyShortDetail ?? ''}
    </div>
  )
}

export function Experiences (props: IExperiences): JSX.Element {
  const { icon, sectionTitle, list } = props
  return (
    <Section
      className="experieces-section"
      icon={icon ?? 'briefcase'}
      title={sectionTitle ?? 'Experiences'}
      id="experiences"
    >
      {list?.map((item, i) => {
        return ListItem({ item, i })
      })}
    </Section>
  )
}
