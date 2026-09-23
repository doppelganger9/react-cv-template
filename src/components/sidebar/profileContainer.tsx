import * as React from 'react'
import { type IProfileHead } from '../../data/profile'

function ProfilePicture ({ imagePath }: { imagePath?: string }): JSX.Element | null {
  if (imagePath == null) {
    return null
  }
  return (<img className="profile" src={imagePath} alt="Portrait de David Lacourt" />)
}

export function ProfileContainer (props: IProfileHead): JSX.Element {
  const { title, name, availability, imagePath } = props
  return (
    <div className="profile-container">
      {ProfilePicture({ imagePath })}
      <h1 className="name" style={{ fontSize: 25 }}>{ name }</h1>
      { title.split(', ').map((titleWords, i) => (<h3 className="tagline" key={i}>{titleWords}</h3>)) }
      { availability != null && <p className="availability">{availability}</p> }
    </div>
  )
}
