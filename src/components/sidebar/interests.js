import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LanguageDetails extends Component {
  renderListItem(item) {
    return (
      <li>
        {item}
      </li>
    );
  }

  render() {
    const { title, list } = this.props;
    return (
      <div className="languages-container container-block">
        <h2 className="container-block-title">{title || 'Interests'}</h2>
        <ul className="list-unstyled interests-list">
          {list.map((item) => {
            return this.renderListItem(item);
          })}
        </ul>
      </div>
    );
  }
}

LanguageDetails.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired
};
