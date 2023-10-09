import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import css from './contacts.module.css';
export class Contacts extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = name => {
    const contact = {
      id: nanoid(),
      name,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <h1 className={css.titlePhone}>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2 className={css.titleContacts}>Contacts</h2>
        <ContactList contacts={contacts} />
      </div>
    );
  }
}
