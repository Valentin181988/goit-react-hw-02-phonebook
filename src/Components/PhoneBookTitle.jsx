import PropTypes from 'prop-types';

export const PhoneBookTitle = ({title}) => {
  return (
      <>
        <h2>{title}</h2>
      </>
  );
};

PhoneBookTitle.propTypes = {
    title: PropTypes.string
 };