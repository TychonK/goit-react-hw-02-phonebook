import { Component } from 'react'

import { v4 as uuid } from 'uuid'

export class Form extends Component {
    nameId = uuid()
    numberId = uuid()

    state = {
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
    if (this.props.existing.some(e => e.name === this.state.name)) {
      alert(`${this.state.name} already exists.`)
      return
}
    const obj = {
      name: this.state.name,
      number: this.state.number,
    }
    this.props.addNewContact(obj)
    this.setState({ name: "", number: "" })
  }
    
    render() {
        return (
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
          <button className="add-button" type="submit">Add contact</button>
        </form>
        )
    }
}