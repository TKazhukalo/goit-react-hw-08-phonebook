import React from "react";
import { Button, ContactItem, ItemContact, ListItem } from "./ContactsList.styled";
import {  useDispatch, useSelector } from "react-redux";
import { selectVisibleContacts } from "redux/contacts/selectors";
import { deleteContact } from "redux/contacts/operations";

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ListItem>
      {contacts.map(({ name, number, id, phone }) => {
        const contactNumber = number || phone;
        return (
          <ContactItem key={id}>
            <ItemContact>
              {name}: {contactNumber}
            </ItemContact>
          <Button type="button"
              name="delete"
              onClick={() => dispatch(deleteContact(id))}>
              Delete
          </Button>
          </ContactItem>
        );
      })}
    </ListItem>
  );
};