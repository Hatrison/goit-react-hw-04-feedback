import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button } from './FeedbackOption.styled';

export default class FeedbackOption extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { text, onLeaveFeedback } = this.props;

    return <Button onClick={() => onLeaveFeedback(text)}>{text}</Button>;
  }
}
