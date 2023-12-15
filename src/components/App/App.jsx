import { Form } from '../Form/Form';
import { Contacts } from '../Contacts/Contacts';
import { Filter } from '../Filter/Filter';
import css from './App.module.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <div className={css.form__wrapper}>
      <h2 className={css.form__title}>Phonebook</h2>
      <Form />
      <h2 className={css.form__title}>Contacts</h2>
      <Filter />
      <Contacts />
      <ToastContainer />
    </div>
  );
};
