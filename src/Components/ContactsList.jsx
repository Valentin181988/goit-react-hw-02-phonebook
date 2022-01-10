import PropTypes from 'prop-types';

export const ContactsList = ({contacts, onDeleteContact}) => {
    return (
        <div>
            <ul>
                {contacts.map(({id, name, number}) =>(
                  <li key={number}>{name}: {number}
                      <button onClick={() => onDeleteContact(id)}>Delete</button>
                  </li>) 
                  )}
            </ul>
        </div>
    );
};


ContactsList.propTypes = {
   contacts: PropTypes.array,
   onDeleteContact: PropTypes.func
};