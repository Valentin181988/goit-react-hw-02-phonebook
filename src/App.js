import React, { Component } from "react";
import { PhoneBookForm } from './Components/PhoneBookForm';
import { Contacts } from './Components/Contacts';
class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  formSubmitHandler = data => {
    console.log(data);
  }

  
 /* addContact = text => {
    console.log(text);
  }; */

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
