import * as React from 'react'

function renderLine ({ icon, label, years }: { icon: string, label: string, years: number }): JSX.Element {
  return (
    <li key={label}>
      <h4>
        <div style={{ width: '1em', display: 'inline-block', textAlign: 'center' }}><i className={`fa fa-${icon}`} /></div>
        <div style={{ width: '3.5em', display: 'inline-block', textAlign: 'center' }}>
          {label}
:
        </div>
        <div style={{ width: '3em', display: 'inline-block', textAlign: 'right' }}>
          <em>
            {years}
            {' '}
ans
          </em>
        </div>
      </h4>
    </li>
  )
}

export function ExperienceChart (): JSX.Element {
  const xpLines = [
    { icon: 'cloud', label: 'Web', years: (new Date()).getFullYear() - 2002 },
    { icon: 'line-chart', label: 'Agile', years: (new Date()).getFullYear() - 2008 },
    { icon: 'mobile', label: 'Mobile', years: (new Date()).getFullYear() - 2011 }
  ]
  return (
    <div className="container-block" style={{ backgroundColor: 'rgba(0,0,0,.1)', color: 'white' }}>
      <ul className="list-unstyled">
        {xpLines.map(renderLine)}
      </ul>
    </div>
  )
}
