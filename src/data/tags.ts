import { type ISection } from '.'

export interface ITags extends ISection<string> {
}

export const tags: ITags = {
  sectionTitle: 'Compétences',
  icon: undefined,
  list: [
    'JavaScript',
    'Angular',
    'ReactJS',
    'VueJS',
    'Svelte',
    'Webpack',
    'Npm/Yarn',
    'Git',
    'Java',
    'JEE',
    'Objective C',
    'iOS',
    'Android',
    'Ionic',
    'Capacitor',
    'MacOS',
    'NodeJS',
    'ExpressJS',
    'OAuth2',
    'OpenID Connect',
    'KeyCloak',
    'Clean Code',
    'TDD',
    'Guilds',
    'Speaker',
    'Code Review',
    'Collective Code Ownership',
    'Scrum',
    'Kanban',
    'Cloud',
    'Azure', 'AWS', 'GCP',
    'Serverless',
    'Facilitation de réunions',
    'Architecture N-Tier',
    'APIs RESTful',
    'Architecture SOA',
    'Microservices',
    'Kubernetes',
    'Docker',
    'Springboot'
  ]
}

export default tags
