import { Component } from "react";
import { todoItem } from "../App";

interface TodoRowsProps {
  item: todoItem;
  toggleDone: (item: todoItem) => void;
}

export class TodoRows extends Component<TodoRowsProps, any> {
  render = () => (
    <tr>
      <td>{this.props.item.action}</td>
      <td>
        <input
          type={"checkbox"}
          checked={this.props.item.done}
          onChange={() => this.props.toggleDone(this.props.item)}
        />
      </td>
    </tr>
  );
}
