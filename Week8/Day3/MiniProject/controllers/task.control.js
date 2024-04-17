import {
    _getAllTasks,
    _getTaskById,
    _createTask,
    _updateTask,
    _deleteTask
  } from "../models/task.model.js";
  
  export const getAllTasks = (req, res) => {
    _getAllTasks()
      .then((data) => {
      res.json(data);
      })
      .catch((e) => {
      res.status(404).json({ msg: "something went wrong" });
      console.log(e);
      });
  };
  
  export const getTaskById = (req, res) => {
    const { id } = req.params;
    _getTaskById(id)
      .then((data) => {
      res.json(data);
      })
      .catch((e) => {
        res.status(404).json({ msg: "something went wrong" });
        console.log(e);
      });
  };
  
  export const createTask = (req, res) => {
    const {description, due_date} = req.body;
    _createTask(description, due_date)
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  
  export const updateTask = (req, res) => {
      const { id } = req.params;
      const {completed} = req.body;
      _updateTask(completed, id)
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        console.log(e);
      });
    };
  
  export const deleteTask = (req, res) => {
      const { id } = req.params;
      _deleteTask(id)
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        console.log(e);
      });
    };
  