import * as React from 'react';
import ContactItem from './ContactItem';

export default function ContactList() {
  const ListContacts = ['Adam Malinowski', 'Jan Nowak', 'Andrzej Kowalski'];

  return (
    <ul>
      {ListContacts.map((contact) => (
        <ContactItem name_surname={contact} />
      ))}
    </ul>
  );
}
