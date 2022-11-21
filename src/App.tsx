import React, { Component } from "react";

interface AppState {
  userName: string;
  newTodo: string;
  todoItems: todoItem[];
}

type todoItem = {
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

  newTodo = () => {
    this.setState({
      ...this.state,
      todoItems: [
        ...this.state.todoItems,
        { action: this.state.newTodo, done: false },
      ],
    });
  };

  toggleDone = (todo: todoItem) => {
    this.setState({
      ...this.state,
      todoItems: this.state.todoItems.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      ),
    });
  };

  todoRows() {
    return this.state.todoItems.map((item) => (
      <tr key={item.action}>
        <td>{item.action}</td>
        <td>
          <input
            type={"checkbox"}
            checked={item.done}
            onChange={() => this.toggleDone(item)}
          />
        </td>
      </tr>
    ));
  }

  render(): React.ReactNode {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="bg-primary text-white text-center p2">
              {this.state.userName} Todo list
            </h2>
          </div>
          <div className="col-12">
            <input
              name="newTodo"
              className="form-control"
              value={this.state.newTodo}
              onChange={(e) => this.onChange(e)}
            />
            <button className="btn btn-primary mt-1" onClick={this.newTodo}>
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
