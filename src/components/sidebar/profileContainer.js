import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProfileContainer extends Component {
  renderProfilePicture(imagePath) {
    if (imagePath) {
      return (<img className="profile" src={imagePath} alt="" style={{ maxWidth: 185 }} />);
    }
    return null;
  }

  render() {
    const { title, name, imagePath } = this.props;
    return (
      <div className="profile-container">
        {this.renderProfilePicture(imagePath)}
        <h1 className="name" style={{ fontSize: 25 }}>{ name }</h1>
        { title.split(', ').map((titleWords, i) => (<h3 className="tagline" key={i}>{titleWords}</h3>)) }
      </div>
    );
  }
}

ProfileContainer.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string
};

ProfileContainer.defaultProps = {
  imagePath: null
};
