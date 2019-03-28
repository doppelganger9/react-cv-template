import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './assets/theme/styles-5.css';
import Section from './components/shared/section';
import Sidebar from './components/sidebar';
import Experiences from './components/experiences';
import Projects from './components/projects';
import Tags from './components/tags';
import AppsImagesPortfolio from './components/imagesAppPortfolio';
import LangEvolution from './components/langEvolution';
import DoneThisAndThat from './components/doneList';

export default class CV extends Component {
  renderExperiencesSection() {
    if (this.props.experiences) {
      return (<Experiences {...this.props.experiences} />);
    }
    return null;
  }

  renderProjectsSection() {
    if (this.props.projects) {
      return (<Projects {...this.props.projects} />);
    }
    return null;
  }

  renderTags() {
    if (this.props.tags) {
      return (<Tags {...this.props.tags} />);
    }
    return null;
  }

  renderOpenSourcePart() {
    return (<div><a href="https://github.com/doppelganger9/react-cv-template" target="_blank">Le code source de ce CV est disponible sur GitHub</a></div>);
  }

  renderCareerProfile() {
    const { icon, sectionTitle, description } = this.props.careerProfile;
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

  render() {
    return (
      <div className="wrapper">
        <Sidebar
          {...this.props.profile}
        />
        <div className="main-wrapper">
          {this.renderCareerProfile()}
          <LangEvolution/>
          {this.renderExperiencesSection()}
          {/*this.renderProjectsSection()*/}
          <AppsImagesPortfolio/>
          {this.renderTags()}
          <DoneThisAndThat/>
          {this.renderOpenSourcePart()}
        </div>
      </div>
    );
  }
}

CV.propTypes = {
  profile: PropTypes.shape().isRequired,
  careerProfile: PropTypes.shape().isRequired,
  experiences: PropTypes.shape().isRequired,
  projects: PropTypes.shape().isRequired,
  tags: PropTypes.shape().isRequired
};
