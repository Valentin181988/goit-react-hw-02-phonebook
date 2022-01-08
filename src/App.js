import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { PhoneBookForm } from './Components/PhoneBookForm';
import { Contacts } from './Components/Contacts';
class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  formSubmitHandler = (data) => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number
    };

    console.log(contact)

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts] 
    }))
  };

  render() {
    return (
      <div>
        <PhoneBookForm onSubmit={this.formSubmitHandler}/>
        <Contacts /> 
      </div>
    );
  };
  
}

export default App;
