import PropTypes from 'prop-types';

export const PhoneBookTitle = ({title}) => {
  return (
      <>
        <h1>{title}</h1>
      </>
  );
};

PhoneBookTitle.propTypes = {
    title: PropTypes.string
 };