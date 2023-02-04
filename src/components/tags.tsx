import * as React from 'react'
import { type ITags } from '../data/tags'
import { Section } from './shared/section'

function ListItem (props: { item: string, i: number }): JSX.Element {
  const { item, i } = props
  return (
    <li className="item" key={`tag_item_${i}`}>
      {item}
    </li>
  )
}

export function Tags (props: ITags): JSX.Element {
  const { icon, sectionTitle, list } = props

  return (
    <Section
      className="tags-section"
      icon={icon ?? 'rocket'}
      id="tags"
      title={sectionTitle ?? 'Skills & Proficiency'}
    >
      <div className="skills">
        <ul className="skillset">
          {list?.map((item, i) => {
            return ListItem({ item, i })
          })}
        </ul>
      </div>
    </Section>
  )
}
