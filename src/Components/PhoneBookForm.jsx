import React, { Component } from "react";

export class PhoneBookForm extends Component {

    state = {
        name: '',
        number: ''
      };

    handleInputChange = event => {
        const {name, value} = event.currentTarget;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        
        this.props.onSubmit(this.state);
        this.resetForm();
    };

    resetForm = () => {
        this.setState({name: '', number: ''})
    };

    render() {
        const {name, number} = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required 
                    onChange={this.handleInputChange}/>
    
                <label>Number</label>
                <input
                    type="number"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.handleInputChange}/>
                <button 
                    type="submit">Add contact
                </button>
          </form>
        );
    };

}; 
   
       
