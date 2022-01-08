import React, { Component } from "react";
import { PhoneBookForm } from './Components/PhoneBookForm';
import { Contacts } from './Components/Contacts';
class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  

  /* addContact = text => {
    console.log(text);
  }; */

  render() {
    return (
      <div>
        <PhoneBookForm />
        <Contacts /> 
      </div>
    );
  };
  
}

export default App;
