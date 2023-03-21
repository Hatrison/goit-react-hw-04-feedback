import PropTypes from 'prop-types';
import { Button } from './FeedbackOption.styled';

const FeedbackOption = ({ text, onLeaveFeedback }) => {
  return <Button onClick={() => onLeaveFeedback(text)}>{text}</Button>;
};

FeedbackOption.propTypes = {
  text: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOption;
