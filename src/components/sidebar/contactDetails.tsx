import * as React from 'react'
import { type IProfileLinks } from '../../data/profile'

interface ListItemProps {
  className: string
  data?: string
  iconName: string
  type: string
}

function ListItem (props: ListItemProps): JSX.Element | null {
  const { className, data, iconName, type } = props
  if (data == null) {
    return null
  }
  let href = data
  let protocolRelative = true
  switch (type) {
    case 'email':
      href = `mailto:${data}`
      protocolRelative = false
      break
    case 'phone':
      href = `tel:${data}`
      protocolRelative = false
      break
    case 'city':
      href = `www.google.com/maps/search/?api=1&query=${data}`
      break
  }
  return (
    <li className={className}>
      <i className={`fa ${iconName}`} />
      <a href={protocolRelative ? `//${href}` : href} target="_blank" rel="noopener noreferrer">
        {' '}
        {data}
        {' '}
      </a>
    </li>
  )
}

export function ContactDetails (props: IProfileLinks): JSX.Element {
  const {
    mail,
    phoneNumber,
    city,
    website,
    linkedin,
    twitter,
    github,
    gitlab,
    dev,
    codepen,
    stackoverflow
  } = props
  return (
    <div className="contact-container container-block">
      <ul className="list-unstyled contact-list">
        {ListItem({ className: 'email', data: mail, iconName: 'fa-envelope', type: 'email' })}
        {ListItem({ className: 'phone', data: phoneNumber, iconName: 'fa-phone', type: 'phone' })}
        {ListItem({ className: 'city', data: city, iconName: 'fa-map-marker', type: 'city' })}
        {ListItem({ className: 'website', data: website, iconName: 'fa-globe', type: 'link' })}
        {ListItem({ className: 'linkedin', data: linkedin, iconName: 'fa-linkedin', type: 'link' })}
        {ListItem({ className: 'twitter', data: twitter, iconName: 'fa-twitter', type: 'link' })}
        {ListItem({ className: 'github', data: github, iconName: 'fa-github', type: 'link' })}
        {ListItem({ className: 'gitlab', data: gitlab, iconName: 'fa-gitlab', type: 'link' })}
        {ListItem({ className: 'dev', data: dev, iconName: 'fa-dev', type: 'link' })}
        {ListItem({ className: 'codepen', data: codepen, iconName: 'fa-codepen', type: 'link' })}
        {ListItem({ className: 'stackoverflow', data: stackoverflow, iconName: 'fa-stack-overflow', type: 'link' })}
      </ul>
    </div>
  )
}
