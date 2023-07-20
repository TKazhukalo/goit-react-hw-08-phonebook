
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;

// import { createSelector } from "@reduxjs/toolkit";

// export const selectContacts = state => state.contacts.items;
// export const selectIsLoading = state => state.contacts.isLoading;
// export const selectError = state => state.contacts.error;
// export const selectStatusFilters = state => state.filter;
// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectStatusFilters],
//   (contacts, filter) => {
//     return contacts.filter(contact => {
//       return contact.name.toLowerCase().includes(filter.toLowerCase());
//     });
//   }
// );