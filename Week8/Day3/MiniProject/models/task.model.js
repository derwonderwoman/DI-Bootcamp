import {db} from "../config/data.js";

export const _getAllTasks = () => {
    return db("tasks").select ("id", "description", "due_date", "completed");
};
  
  export const _getTaskById = (id) => {
    return db("tasks").select ("id", "description", "due_date", "completed").where({ id: id });
  };
  
  export const _createTask = (description, due_date) => {
      return db('tasks').insert ({description, due_date}, ["id","description", "due_date", "completed"]);
    };
  
    export const _deleteTask = (id) => {
        return db("tasks").delete().where({ id: id });
    };
  
  export const _updateTask = (completed, id) => {
    return db("tasks").update({ completed }).where({ id: id });
};
  
  