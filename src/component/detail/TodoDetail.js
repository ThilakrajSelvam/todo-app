import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import "./TodoDetail.css";

const getInitialState = () => {
  return {
    taskId: new Date().getTime(),
    taskName: "",
    date: new Date().toISOString().split("T")[0],
    isDone: false,
  };
};

const TodoDetail = ({ onSave }) => {
  const [todo, setTodo] = useState(getInitialState());

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(todo);
    setTodo(getInitialState);
  };

  return (
    <form onSubmit={handleSubmit} className="form_container">
      <h2>Add Todo</h2>
      <div className="input_container">
        <TextField
          label="Task Name"
          className="input"
          name="taskName"
          value={todo.taskName}
          fullWidth
          autoComplete="off"
          onChange={(e) => setTodo({ ...todo, taskName: e.target.value })}
        />
      </div>
      <div className="input_container">
        <TextField
          label="Date"
          type="date"
          value={todo.date}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          onChange={(e) => setTodo({ ...todo, date: e.target.value })}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        className="submit_button"
        disableElevation
        size="large"
      >
        Save
      </Button>
    </form>
  );
};

export default TodoDetail;
