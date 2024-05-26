import { useCallback } from "react";
import { createSelector } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../../app/store";
import {
  add,
  remove,
  check,
  clear,
  active,
  EnumActiveState,
  tasksState,
  filterState,
  edit
} from "./slice";

// get all tasks by filter
export const useTasks = () => {
  return useAppSelector(
    createSelector([tasksState, filterState], (tasks, filter) => {
      switch (filter) {
        case EnumActiveState.Active:
          return tasks.filter((task) => !task.checked);
        case EnumActiveState.Completed:
          return tasks.filter((task) => task.checked);
        default:
          return tasks;
      }
    })
  );
};

// get one task by id
export const useTask = (id: string) => {
  return useAppSelector(
    createSelector([tasksState], (tasks) =>
      tasks.find((task) => task.id === id)
    )
  );
};

// get filter
export const useFilter = () => {
  return useAppSelector(createSelector([filterState], (filter) => filter));
};

//set filter
export const useSetFilter = () => {
  const dispatch = useAppDispatch();
  return useCallback(
    (filter: EnumActiveState) => {
      dispatch(active(filter));
    },
    [dispatch]
  );
};

// add task
export const useAddTask = () => {
  const dispatch = useAppDispatch();
  return useCallback(
    (task: string) => {
      dispatch(add(task));
    },
    [dispatch]
  );
};

// remove task
export const useRemoveTask = () => {
  const dispatch = useAppDispatch();
  return useCallback(
    (id: string) => {
      dispatch(remove(id));
    },
    [dispatch]
  );
};

// check task
export const useCheckTask = () => {
  const dispatch = useAppDispatch();
  return useCallback(
    (id: string) => {
      dispatch(check(id));
    },
    [dispatch]
  );
};

// clear tasks
export const useClearTasks = () => {
  const dispatch = useAppDispatch();
  return useCallback(() => {
    dispatch(clear());
  }, [dispatch]);
};

export const useEditTasks = () =>{
  const dispatch = useAppDispatch();
  return useCallback(
    (id: string, newText: string) => {
      dispatch(edit({id, newText}));
    },
    [dispatch]
  );
}


















