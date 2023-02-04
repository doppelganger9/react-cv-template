import { ProfileContainer } from './profileContainer';
import { ExperienceChart } from './experienceChart';
import { ContactDetails } from './contactDetails';
import { EducationDetails } from './educationDetails';
import { LanguageDetails } from './languageDetails';
import { Interests } from './interests';
import { QrCode } from "./qrCode";

function renderInterests({ interests }) {
  if (interests) {
    return (<Interests list={interests.list} title={interests.sectionTitle} />);
  }
  return null;
}

function renderLanguages({ languages }) {
  return languages ? (<LanguageDetails list={languages.list} title={languages.sectionTitle} />) : null;
}

function renderEducationDetails({ educationDetails }) {
  if (educationDetails) {
    return (<EducationDetails list={educationDetails.list} title={educationDetails.sectionTitle} />);
  }
  return null;
}

function renderOpenSourcePart() {
  return (
    <div className="container-block">
      <a href="https://github.com/doppelganger9/react-cv-template" target="_blank" rel="noreferrer noopener">
        Le code source de ce CV est disponible sur GitHub
      </a>
    </div>
  );
}

function renderProfileContainer(props) {
  const { name, title, imagePath } = props;
  return (
    <ProfileContainer
      name={name}
      title={title}
      imagePath={imagePath}
    />
  );
}

function renderContactDetails(props) {
  const {
    mail, phoneNumber, website, city, linkedin, github, gitlab, codepen, stackoverflow, twitter
  } = props;
  return (
    <ContactDetails
      mail={mail}
      phoneNumber={phoneNumber}
      website={website}
      city={city}
      linkedin={linkedin}
      github={github}
      gitlab={gitlab}
      codepen={codepen}
      stackoverflow={stackoverflow}
      twitter={twitter}
    />
  );
}

export function Sidebar(props: SidebarProps) {
  return (
    <div className="sidebar-wrapper">
      {renderProfileContainer(props)}
      <ExperienceChart />
      {renderContactDetails(props)}
      {renderEducationDetails(props)}
      {renderLanguages(props)}
      {renderInterests(props)}
      {QrCode()}
      {renderOpenSourcePart()}
    </div>
  );
}

type SidebarProps = {
  name: string,
  title:string,
  imagePath?: string,
  city?: string,
  mail: string,
  phoneNumber?: string,
  website?: string,
  linkedin?: string,
  codepen?: string,
  github?: string,
  gitlab?: string,
  twitter?: string,
  stackoverflow?: string,
  educationDetails: any,//shape().isRequired,
  languages: any,//shape().isRequired,
  interests: any,//shape().isRequired,
};
