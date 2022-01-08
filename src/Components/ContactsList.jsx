export const ContactsList = ({contacts, onDeleteContact}) => {
    return (
        <div>
            <p>Contacts</p>
            <ul>
                {contacts.map(({id, name, number}) =>
                  <li key={number}>{name}: {number}
                      <button onClick={() => onDeleteContact(id)}>Delete</button>
                  </li>)}
            </ul>
        </div>
    );
};