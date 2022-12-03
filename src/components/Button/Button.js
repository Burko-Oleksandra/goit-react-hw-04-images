import PropTypes from 'prop-types';

import { TfiMoreAlt } from 'react-icons/tfi';
import { LoadMoreBtn } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <LoadMoreBtn onClick={onClick} type="button">
      <TfiMoreAlt size="3em" color="#483d8b" />
    </LoadMoreBtn>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
