import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import AssignmentIcon from "@material-ui/icons/Assignment";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import React from "react";
import "./TodoList.css";

const TodoList = ({ todos, handleDelete, handleComplete }) => {
  return (
    <div className="list_container">
      <h2 style={{ alignSelf: "center" }}>
        Todos {todos.length > 0 && todos.length}
      </h2>
      <List>
        {todos &&
          todos.map((todo) => {
            return (
              <ListItem key={todo.taskId} className="todo_item">
                <ListItemAvatar>
                  <Avatar>
                    <AssignmentIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={todo.taskName} secondary={todo.date} />
                <ListItemSecondaryAction>
                  {todo.isDone ? (
                    <span className="tag">COMPLETED</span>
                  ) : (
                    <IconButton onClick={() => handleComplete(todo.taskId)}>
                      <CheckCircleOutlineIcon />
                    </IconButton>
                  )}
                  <IconButton onClick={() => handleDelete(todo.taskId)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
      </List>
    </div>
  );
};

export default TodoList;
