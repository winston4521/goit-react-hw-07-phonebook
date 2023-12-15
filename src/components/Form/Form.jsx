import { useState } from 'react';
import shortid from 'shortid';

import css from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/asynkSunks';
import { selectContacts } from '../../redux/Selectors';
import { toast } from 'react-toastify';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onSubmitBtn = e => {
    e.preventDefault();

    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (contacts.find(({ name }) => name.includes(newContact.name))) {
      reset();
      return toast.error(`${newContact.name} is already in contacts`);
    }
    dispatch(addContact(newContact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={onSubmitBtn}>
      <label className={css.form__label}>
        Name
        <input
          className={css.form__input}
          placeholder="Name"
          type="text"
          name="name"
          required
          value={name}
          onChange={({ target }) => {
            setName(target.value);
          }}
        />
      </label>
      <label className={css.form__label}>
        Number
        <input
          className={css.form__input}
          placeholder="Phone number"
          type="tel"
          name="number"
          required
          value={number}
          onChange={({ target }) => {
            setNumber(target.value);
          }}
        />
      </label>
      <button className={css.form__button} type="submit">
        Add contact
      </button>
    </form>
  );
};
