import PropTypes from 'prop-types';
import { Component } from 'react';
import { Container, Title } from './Section.styled';

export default class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title, children } = this.props;

    return (
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    );
  }
}
