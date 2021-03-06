import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CLASS_NAME = 'react-fade-in-mask';

export default class ReactFadeInMask extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The visible value.
     */
    value: PropTypes.bool
  };

  static defaultProps = {
    value: false
  };

  render() {
    const { className, value, ...props } = this.props;
    return (
      <div
        className={classNames(CLASS_NAME, className, `is-visible--${value}`)}
        {...props}
      />
    );
  }
}
