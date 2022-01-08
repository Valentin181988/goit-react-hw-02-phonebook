import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { PhoneBookForm } from './Components/PhoneBookForm';
import { ContactsList } from './Components/ContactsList';
import { Filter } from './Components/Filter';
class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  formSubmitHandler = ({name, number}) => {
    const contact = {
      id: nanoid(),
      name,
      number
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts] 
    }))
  };

  changeSearchFilter = event => {
    this.setState({filter: event.currentTarget.value})
  };

  getVisibleContacts = () => {
    const {contacts, filter} = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter));
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== contactId),
      };
    });
  };

  
  render() {

     const { filter } = this.state;

      const searchContact = this.getVisibleContacts();

      return (
        <div>
          <PhoneBookForm onSubmit={this.formSubmitHandler}/>
          
          <Filter value={filter} onChange={this.changeSearchFilter}/>
          
          <ContactsList contacts={searchContact} onDeleteContact={this.deleteContact}/> 
        </div>
    );
  };
  
}

export default App;
