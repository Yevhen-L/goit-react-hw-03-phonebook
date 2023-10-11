import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import css from './contacts.module.css';

export class Contacts extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <div className={css.phonebook}>
          <h1 className={css.titlePhone}>Phonebook</h1>
          <ContactForm
            onAddContact={this.addContact}
            contacts={contacts}
          />{' '}
          {/* Передача contacts у ContactForm */}
        </div>
        <div className={css.contacts}>
          <h2 className={css.titleContacts}>Contacts</h2>
          <Filter value={filter} onChange={this.handleFilterChange} />
          <ContactList contacts={filteredContacts} />
        </div>
      </div>
    );
  }
}
