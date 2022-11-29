import * as React from 'react';

type Contact = {
  name_surname: string;
};

export default function ContactItem({ name_surname }: Contact) {
  return <p>{name_surname}</p>;
}
