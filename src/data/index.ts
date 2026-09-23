import profile from './profile'
import careerProfile, { type ICareerProfile } from './careerProfile'
import experiences, { type IExperiences } from './experiences'
import tags, { type ITags } from './tags'
import doneList from './doneList'
import proofPoints, { type IProofPoint } from './proofPoints'

export interface IData {
  profile: any
  careerProfile: ICareerProfile
  experiences: IExperiences
  tags: ITags
  doneList: string[]
  proofPoints: IProofPoint[]
}

export const data: IData = {
  profile,
  careerProfile,
  experiences,
  tags,
  doneList,
  proofPoints
}

export interface ISection<A> {
  sectionTitle?: string
  list?: A[]
  icon?: string
  description?: string
}

export default data
