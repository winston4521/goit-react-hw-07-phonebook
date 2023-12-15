import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;

export const filteredTasks = createSelector(
  selectContacts,
  selectFilter,
  (items, filter) => {
    return items.filter(({ name }) => name.includes(filter));
  }
);
