import React, { Component } from "react";
import { Navbar } from "./components/Navbar";
import { TodoRows } from "./components/TodoRows";

interface AppState {
  userName: string;
  newTodo: string;
  todoItems: todoItem[];
}

export type todoItem = {
  action: string;
  done: boolean;
};

export default class App extends Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      userName: "Name1",
      newTodo: "",
      todoItems: [
        { action: "Buy milk", done: false },
        { action: "Dentist at 5pm", done: true },
        { action: "Go to Gym", done: false },
      ],
    };
  }

  onChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }

  addTodo = () => {
    this.setState({
      ...this.state,
      todoItems: [
        ...this.state.todoItems,
        { action: this.state.newTodo, done: false },
      ],
    });
  };

  todoRows = () => {
    return this.state.todoItems.map((item) => (
      <TodoRows key={item.action} item={item} toggleDone={this.toggleDone} />
    ));
  };

  toggleDone = (todo: todoItem) => {
    this.setState({
      ...this.state,
      todoItems: this.state.todoItems.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      ),
    });
  };

  render(): React.ReactNode {
    return (
      <div className="container">
        <div className="row">
          <Navbar userName={this.state.userName} />
          <div className="col-12">
            <input
              name="newTodo"
              className="form-control"
              value={this.state.newTodo}
              onChange={(e) => this.onChange(e)}
            />
            <button className="btn btn-primary mt-1" onClick={this.addTodo}>
              Add
            </button>
          </div>
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Complete</th>
                </tr>
              </thead>
              <tbody>{this.todoRows()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
