import './App.scss';
import { Component } from 'react';

import ListItems from './components/Contacts_List/ListItems'
import { Form } from './components/Form/Form'
import { Filter } from './components/Filter/Filter'


class App extends Component {
  state = {
    contacts: [{ name: "Hello", number:"+20303003"}],
  filter: ''
  }

  addNewContact = (obj) => {
    this.setState((prev) => {
      return { contacts: [...prev.contacts, obj] }
    })
  }
  
  handleSearch = (e) => {
    this.setState({
      filter: e.target.value,
    })
  }

  delete = (e) => {
    this.setState(prevState => {
        const contacts = prevState.contacts.filter(contact => contact.name !== e.target.id);
        return { contacts };
    });
}

  render() { 
    return (
      <div className="App">
        <Form addNewContact={this.addNewContact} existing={ this.state.contacts}/>
        <h2>Contacts</h2>
        <h3>Find contacts by name</h3>
        <Filter handleSearch={this.handleSearch} filter={this.state.filter}/>
        <ul>
          <ListItems arr={this.state.contacts} filter={this.state.filter} deleteContact={ this.delete }/>
        </ul>
      </div>
    )
  }
}

export default App;
