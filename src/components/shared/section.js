import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Section extends Component {
  render() {
    const { className, id, icon, title, children } = this.props;
    return (
      <section className={`section ${className || ''}`} id={id || null}>
        <h2 className="section-title">
          <i className={`fa fa-${icon}`} />
          { title }
        </h2>
        { children }
      </section>
    );
  }
}

Section.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.string
};
