import React from 'react';

import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fillFilter } from 'redux/filterSlice';
import { selectFilter } from '../../redux/Selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <>
      <label className={css.filter__label}>
        Find contacts by name
        <input
          className={css.filter__input}
          type="text"
          name="search"
          value={filter}
          onChange={({ target }) => {
            dispatch(fillFilter(target.value));
          }}
        />
      </label>
    </>
  );
};
