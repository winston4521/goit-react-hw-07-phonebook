import React, { useMemo } from 'react';
import css from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/asynkSunks';
import { filteredTasks } from '../../redux/Selectors';

export const Contacts = () => {
  const dispatch = useDispatch();

  const filterTasks = useSelector(filteredTasks);

  return (
    <ul className={css.delete__list}>
      {filterTasks.map(({ id, name, number }) => (
        <li className={css.delete__item} key={id}>
          <span className={css.delete__userName}>
            {name} : {number}
          </span>

          <>
            <button
              className={css.delete__btn}
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            ></button>
          </>
        </li>
      ))}
    </ul>
  );
};
