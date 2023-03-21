import PropTypes from 'prop-types';
import FeedbackOption from 'components/FeedbackOption';
import { OptionsList } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsList>
      {options.map((option, index) => (
        <li key={index}>
          <FeedbackOption text={option} onLeaveFeedback={onLeaveFeedback} />
        </li>
      ))}
    </OptionsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
