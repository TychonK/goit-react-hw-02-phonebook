import './App.scss';
import { Component } from 'react';

import {v4 as uuid} from 'uuid'

import ListItems from './components/Contacts_List/ListItems'

class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  name: '',
  number: ''
}
  
  handleContact = (e) => {   
    this.setState((prevState) => {
      return {
        [e.target.name]: e.target.value,
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name: this.state.name,
      number: this.state.number,
    }
    this.setState((prev) => {
      return { contacts: [...prev.contacts, obj] }
    })
    this.setState({ name: "", number: "" })
    
  }
  
  handleSearch = (e) => {
    this.state.contacts.filter((val) => {
      if (e.target.value = "") {
        return val
      } else if (this.state.contacts.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        return val
      }
    }).map((val, key) => {
      return (
        <li>{val, key}</li>
      )
    })
  }
  
  nameId = uuid()
  numberId = uuid()

  render() {
    
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameId}>
            <h2>Name</h2>
          <input
            type="text"
              name="name"
              id={this.nameId}
              value={this.state.name}
            placeholder="Enter contact's name..."
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.handleContact}
          />
          </label>
          <label htmlFor={this.numberId}>
            <h2>Number</h2>
            <input
              type="tel"
              name="number"
              id={this.numberId}
              value={this.state.number}
              placeholder="Enter contact's number..."
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={this.handleContact}
            />

          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <input
          type="search"
          name="search"
          placeholder="Search contact..."
          onChange={this.handleSearch}
        />
        <ul>
          <ListItems arr={ this.state.contacts }/>
        </ul>
      </div>
    )
  }
}

export default App;
