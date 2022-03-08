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
    const { experiences } = this.props;
    if (experiences) {
      return (<Experiences {...experiences} />);
    }
    return null;
  }

  renderProjectsSection() {
    const { projects } = this.props;
    if (projects) {
      return (<Projects {...projects} />);
    }
    return null;
  }

  renderTags() {
    const { tags } = this.props;
    if (tags) {
      return (<Tags {...tags} />);
    }
    return null;
  }

  renderCareerProfile() {
    const { careerProfile } = this.props;
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

  render() {
    const { profile } = this.props;
    return (
      <div className="wrapper">
        <Sidebar
          {...profile}
        />
        <div className="main-wrapper">
          {this.renderCareerProfile()}
          <LangEvolution />
          {this.renderExperiencesSection()}
          {/* this.renderProjectsSection() */}
          <AppsImagesPortfolio />
          {this.renderTags()}
          <DoneThisAndThat />
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
