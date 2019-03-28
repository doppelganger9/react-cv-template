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
        <a href={`//${href}`} target="_blank"> {data} </a>
      </li>
    );
  }
  render() {
    return (
      <div className="contact-container container-block">
        <ul className="list-unstyled contact-list">
          {this.renderListItem('email', this.props.mail, 'fa-envelope', 'email')}
          {this.renderListItem('phone', this.props.phoneNumber, 'fa-phone', 'phone')}
          {this.renderListItem('city', this.props.city, 'fa-map-marker', 'city')}
          {this.renderListItem('website', this.props.website, 'fa-globe', 'link')}
          {this.renderListItem('linkedin', this.props.linkedin, 'fa-linkedin', 'link')}
          {this.renderListItem('twitter', this.props.twitter, 'fa-twitter', 'link')}
          {this.renderListItem('github', this.props.github, 'fa-github', 'link')}
          {this.renderListItem('gitlab', this.props.gitlab, 'fa-gitlab', 'link')}
          {this.renderListItem('dev', this.props.dev, 'fa-dev', 'link')}
          {this.renderListItem('codepen', this.props.codepen, 'fa-codepen', 'link')}
          {this.renderListItem('stackoverflow', this.props.stackoverflow, 'fa-stack-overflow', 'link')}
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
  github: null,
  gitlab: null,
  dev: null,
  stackoverflow: null,
  codepen: null,
  twitter: null
};
