import PropTypes from 'prop-types';

export const Filter = ({value, onChange}) => {
    return(
        <div>
            <label>Find contacts by name</label>
            <input
            type="text"
            value={value}
            onChange={onChange}></input>
          </div>
    );
};

Filter.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string
 };