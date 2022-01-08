import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { PhoneBookForm } from './Components/PhoneBookForm';
import { Contacts } from './Components/Contacts';
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

  render() {
    return (
      <div>
        <PhoneBookForm onSubmit={this.formSubmitHandler}/>
        <Contacts contacts={this.state.contacts}/> 
      </div>
    );
  };
  
}

export default App;
