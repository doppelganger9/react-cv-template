import * as React from 'react'
import { Section } from './shared/section'

export function AiWritingOutro (): JSX.Element {
  return (
    <Section
      className="ai-writing-outro"
      icon="comment-o"
      title="Une dernière question"
    >
      <p>
        Ce CV a lui-même été écrit avec l’aide d’une IA : j’ai apporté les faits, les anecdotes et le ton, puis gardé,
        corrigé ou réécrit ses propositions. <strong>Saurez-vous distinguer les phrases que j’ai écrites de celles que
        j’ai remaniées avec une IA ?</strong> J'ai raconté les coulisses dans un <a href="https://lacourt.dev/2026/09/25">article
        sur mon blog</a>.
      </p>
    </Section>
  )
}
