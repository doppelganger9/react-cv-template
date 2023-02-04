import * as React from 'react'

const sanitize = (str: string): string => str
  .replace(/[ÀÁÂÃÄÅ]/g, 'A')
  .replace(/[àáâãäå]/g, 'a')
  .replace(/[Æ]/g, 'AE')
  .replace(/[æ]/g, 'ae')
  .replace(/[Ç]/g, 'C')
  .replace(/[ç]/g, 'c')
  .replace(/[ÈÉÊË]/g, 'E')
  .replace(/[èéêë]/g, 'e')
  .replace(/[ÌÍÎÏ]/g, 'I')
  .replace(/[ìíîï]/g, 'i')
  .replace(/[Ñ]/g, 'N')
  .replace(/[ñ]/g, 'n')
  .replace(/[ÒÓÔÕÖØ]/g, 'O')
  .replace(/[òóôõöø]/g, 'o')
  .replace(/[Œ]/g, 'OE')
  .replace(/[œ]/g, 'oe')
  .replace(/[Š]/g, 'S')
  .replace(/[š]/g, 's')
  .replace(/[ÙÚÛÜ]/g, 'U')
  .replace(/[ùúûü]/g, 'u')
  .replace(/[ÝŸ]/g, 'Y')
  .replace(/[ýÿ]/g, 'y')

export function Section (props: SectionProps): JSX.Element {
  const {
    className, id, icon, title, children
  } = props
  // make a section id with dashes and no accentuated characters
  const unaccentedId = sanitize(id ?? title ?? '').replace('/s', '-') ?? 'section'
  return (
    <section className={`section ${className ?? ''}`} id={ unaccentedId }>
      <h2 className="section-title">
        <i className={`fa fa-${icon}`} />
        { title }
      </h2>
      { children ?? '' }
    </section>
  )
}

interface SectionProps {
  className?: string
  title: string
  icon: string
  children?: any
  id?: string
}
