import * as React from 'react'

function ListItem ({ item }: { item: string }): JSX.Element {
  return (
    <li key={item}>
      {item}
    </li>
  )
}

export function Interests (props: LanguageDetailsProps): JSX.Element {
  const { title, list } = props
  return (
    <div className="languages-container container-block">
      <h2 className="container-block-title">{title ?? 'Interests'}</h2>
      <ul className="list-unstyled interests-list">
        {list.map((item) => {
          return ListItem({ item })
        })}
      </ul>
    </div>
  )
}

interface LanguageDetailsProps {
  list: string[]
  title: string
}
