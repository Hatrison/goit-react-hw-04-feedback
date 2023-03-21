import PropTypes from 'prop-types';
import Notification from 'components/Notification';
import { Container, Option } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Container>
      {total ? (
        <>
          <Option>good: {good}</Option>
          <Option>neutral: {neutral}</Option>
          <Option>bad: {bad}</Option>
          <Option>total: {total}</Option>
          <Option>positive feedback: {positivePercentage}</Option>
        </>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Container>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
