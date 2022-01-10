import PropTypes from 'prop-types';

export const ContactsTitle = ({title}) => {
    return <h2>{title}</h2>
};

ContactsTitle.propTypes = {
    title: PropTypes.string
};