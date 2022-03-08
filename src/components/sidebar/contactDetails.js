import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactDetails extends Component {
  renderListItem(className, data, iconName, type) {
    if (!data) { return null; }
    let href = data;
    switch (type) {
      case 'email':
        href = `mailto: ${data}`;
        break;
      case 'phone':
        href = `tel:${data}`;
        break;
      case 'city':
        href = `www.google.com/maps/search/?api=1&query=${data}`;
        break;
    }
    return (
      <li className={className}>
        <i className={`fa ${iconName}`} />
        <a href={`//${href}`} target="_blank" rel="noopener noreferrer">
          {' '}
          {data}
          {' '}
        </a>
      </li>
    );
  }

  render() {
    const {
      mail,
      phoneNumber,
      city,
      website,
      linkedin,
      twitter,
      github,
      gitlab,
      dev,
      codepen,
      stackoverflow
    } = this.props;
    return (
      <div className="contact-container container-block">
        <ul className="list-unstyled contact-list">
          {this.renderListItem('email', mail, 'fa-envelope', 'email')}
          {this.renderListItem('phone', phoneNumber, 'fa-phone', 'phone')}
          {this.renderListItem('city', city, 'fa-map-marker', 'city')}
          {this.renderListItem('website', website, 'fa-globe', 'link')}
          {this.renderListItem('linkedin', linkedin, 'fa-linkedin', 'link')}
          {this.renderListItem('twitter', twitter, 'fa-twitter', 'link')}
          {this.renderListItem('github', github, 'fa-github', 'link')}
          {this.renderListItem('gitlab', gitlab, 'fa-gitlab', 'link')}
          {this.renderListItem('dev', dev, 'fa-dev', 'link')}
          {this.renderListItem('codepen', codepen, 'fa-codepen', 'link')}
          {this.renderListItem('stackoverflow', stackoverflow, 'fa-stack-overflow', 'link')}
        </ul>
      </div>
    );
  }
}

ContactDetails.propTypes = {
  mail: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string,
  website: PropTypes.string,
  linkedin: PropTypes.string,
  city: PropTypes.string,
  github: PropTypes.string,
  gitlab: PropTypes.string,
  dev: PropTypes.string,
  stackoverflow: PropTypes.string,
  codepen: PropTypes.string,
  twitter: PropTypes.string,
};

ContactDetails.defaultProps = {
  phoneNumber: null,
  website: null,
  linkedin: null,
  city: null,
  github: null,
  gitlab: null,
  dev: null,
  stackoverflow: null,
  codepen: null,
  twitter: null
};
