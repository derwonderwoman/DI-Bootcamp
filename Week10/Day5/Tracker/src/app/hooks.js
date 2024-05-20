import { createSelector } from '@reduxjs/toolkit';
import { tasks } from './slice';

// export const selectTasksByCategorie = (state, categorie) => createSelector(
//   [tasks],
//   tasks => {
//     if (categorie === 'All') return tasks;
//     return tasks.filter(task => task.categorie === categorie);
//   }
// )(state);

export const selectTasksByCompletion = createSelector(
  [tasks],
  tasks => ({
    all: tasks,
    completed: tasks.filter(task => task.status === 'completed'),
    notCompleted: tasks.filter(task => task.status !== 'completed'),
  })
);