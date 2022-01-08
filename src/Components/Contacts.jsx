export const Contacts = ({contacts}) => {
    return (
        <div>
            <p>Contacts</p>
            <ul>
                {contacts.map(({name, number}) => <li key={number}>{name}: {number}</li>)}
            </ul>
        </div>
    );
};