import profile from './profile'
import careerProfile, { type ICareerProfile } from './careerProfile'
import experiences, { type IExperiences } from './experiences'
import tags, { type ITags } from './tags'
import doneList from './doneList'

export interface IData {
  profile: any
  careerProfile: ICareerProfile
  experiences: IExperiences
  tags: ITags
  doneList: string[]
}

export const data: IData = {
  profile,
  careerProfile,
  experiences,
  tags,
  doneList
}

export interface ISection<A> {
  sectionTitle?: string
  list?: A[]
  icon?: string
  description?: string
}

export default data
