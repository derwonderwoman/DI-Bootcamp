import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { tasks,category } from './slice';

export const selectTasksByCategorie = createSelector([tasks], (tasks)=> {
  const uniqueCategories = new Set();
  tasks.forEach(task => uniqueCategories.add(task.categorie));
  return Array.from(uniqueCategories);
}
);

export const useSelectedCategories = () => {
  const selectCategories = createSelector(
    [tasks, category],
    (tasks, category) => {
      return tasks.filter(task => task.categorie === category);
    }
  );
  return useSelector(selectCategories)
}


export const selectTasksByCompletion = createSelector(
  [tasks],
  tasks => ({
    all: tasks,
    completed: tasks.filter(task => task.status === 'completed'),
    notCompleted: tasks.filter(task => task.status !== 'completed'),
  })
);