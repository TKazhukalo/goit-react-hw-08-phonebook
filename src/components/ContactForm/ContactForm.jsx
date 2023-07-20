import { useSelector, useDispatch } from 'react-redux';
import { Container } from './ContactForm.styled';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';
import { Section } from 'components/Section/Section';
import { selectContacts, selectError, selectIsLoading} from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import Loader from '../Loader/Loader';
import { selectFilter } from '../../redux/filter/selectors';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 ? (
          <Filter value={value}/>
        ) : (
          <p>Введіть дані</p>
        )}
    {isLoading && !error && <Loader />}
{/*{isLoading && !error && <b>Request in progress...</b>}*/}
        <ContactsList />
      </Section>
    </Container>
  );
};
