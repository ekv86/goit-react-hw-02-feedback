import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export const FeedbackOptions = ({ options, handleClick }) => {
  return (
    <ul className={css.options_list}>
      {options.map(el => (
        <li key={nanoid()} className={css.option_item}>
          <button className={css.option_btn} onClick={() => handleClick(el)}>{el.replace(el[0], el[0].toUpperCase())}</button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
};
