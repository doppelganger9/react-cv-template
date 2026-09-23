import { type ISection } from '.'
import profileImageUrl from '../assets/profile.jpg'

export interface IProfileHead {
  name: string
  title: string
  imagePath: string
}

export interface IProfileLinks {
  mail?: string
  phoneNumber?: string
  city?: string
  website?: string
  linkedin?: string
  github?: string
  gitlab?: string
  bitbucket?: string
  dev?: string
  stackoverflow?: string
  codepen?: string
  twitter?: string
}

export interface IProfile extends IProfileHead, IProfileLinks {
  educationDetails: IEducationDetails
  languages: ILanguages
  interests: IInterests
}

export interface IEducationDetails extends ISection<IEducationItem> {
}

export interface IEducationItem {
  degree: string
  school: string
  date: string
}

export interface IInterests extends ISection<string> {
}

export interface ILanguages extends ISection<ILanguageItem> {
}

export interface ILanguageItem {
  name: string
  level: string
}

const profile: IProfile = {
  name: 'David Lacourt',
  title: 'Senior Software Engineer, Tech Lead hands-on, Web & Mobile',
  mail: 'david@lacourt.dev',
  // phoneNumber: 'sorry, my phone number is not open source!',
  city: 'Senlis',
  website: 'lacourt.dev',
  linkedin: 'linkedin.com/in/davidlacourt',
  github: 'github.com/doppelganger9',
  gitlab: 'gitlab.com/davidlacourt',
  bitbucket: 'bitbucket.org/doppelganger9',
  dev: 'dev.to/doppelganger9',
  // stackoverflow: 'stackoverflow.com/users/526660/doppelganger9',//too long and not really relevant.
  codepen: 'codepen.io/doppelganger9',
  imagePath: profileImageUrl,
  twitter: 'twitter.com/doppelganger9',
  educationDetails: {
    sectionTitle: 'Formation',
    list: [
      {
        degree: 'Diplôme d\'Ingénieur',
        school: 'ESIEE Paris',
        date: '1996-2002'
      },
      {
        degree: 'Deviens Meilleur Scrum Master',
        school: 'Formation et ateliers pratiques à distance',
        date: '2022'
      }
    ]
  },
  languages: {
    sectionTitle: 'Langues',
    list: [
      { name: 'Français', level: 'Lang. Maternelle' },
      { name: 'Anglais', level: 'Professionnel' },
      { name: 'Italien', level: 'Professionnel' },
      { name: 'Japonais', level: 'Débutant' },
      { name: 'Russe', level: 'Débutant' }
    ]
  },
  interests: {
    sectionTitle: 'loisirs',
    list: [
      'Canne de Combat (Compétition, Arbitrage, Monitorat)',
      'Musique',
      'Jeux de rôles'
    ]
  }
}

export default profile
