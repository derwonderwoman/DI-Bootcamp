import {ToDoList} from "./toDo.js";
const list = new ToDoList();

const task1 = "wash the dishes";
const task2 = "clean the room";
const task3 = "make a dinner";

list.addTask(task1);
list.addTask(task2);
list.addTask(task3);

list.listAll();

list.markTask("clean the room");

list.listAll();