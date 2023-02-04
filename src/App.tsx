import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css?inline';
// styles are loaded but not the fonts?
import fontAwesomeStyles from 'font-awesome/css/font-awesome.css?inline';
import themeStyles from './assets/theme/styles-5.css?inline';
import appStyles from './App.css?inline';

import { Experiences } from "./components/experiences";
import { Projects } from "./components/projects";
import { Section } from "./components/shared/section";
import { LangEvolution } from "./components/langEvolution";
import { DoneThisAndThat } from "./components/doneList";
import { AppsImagesPortfolio } from "./components/imagesAppPortfolio";
import { Sidebar } from "./components/sidebar";
import { Tags } from "./components/tags";

function renderExperiencesSection(props) {
  const { experiences } = props;
  if (experiences) {
    return (
      <Experiences {...experiences} />
    );
  }
  return null;
}

function renderProjectsSection(props) {
  const { projects } = props;
  if (projects) {
    return (
      <Projects {...projects} />
    );
  }
  return null;
}

function renderTags(props) {
  const { tags } = props;
  if (tags) {
    return (
      <Tags {...tags} />
    );
  }
  return null;
}

function renderCareerProfile(props) {
  const { careerProfile } = props;
  const { icon, sectionTitle, description } = careerProfile;
  const innerContent = (<div className="summary" dangerouslySetInnerHTML={{ __html: description }} />);
  return (
    <Section
      className="summary-section"
      icon={icon || 'user'}
      title={sectionTitle || 'Career Profile'}
    >
      {innerContent}
    </Section>
  );
}

export function CVApp(props) {
  const { profile } = props;

  return (
    <div>
      <style>
        {bootstrapStyles.replace('body', ':host')}
      </style>
      <style>
        {fontAwesomeStyles.replace('body', ':host')}
      </style>
      <style>
        {themeStyles.replace('body', ':host')}
      </style>
      <style>
        {appStyles.replace('body', ':host')}
      </style>
      <div className="wrapper">
        <Sidebar
          {...profile}
        />
        <div className="main-wrapper">
          {renderCareerProfile(props)}
          <LangEvolution />
          {renderExperiencesSection(props)}
          {/* ProjectsSection(props) */}
          <AppsImagesPortfolio />
          {renderTags(props)}
          <DoneThisAndThat />
        </div>
      </div>
    </div>
  );
}
