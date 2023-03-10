import React, { Component } from "react";

class ListTodosComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        todos: [
          { id: 1, description: "Todo 1", done: false, targetDate: new Date() },
          { id: 2, description: "Todo 2", done: false, targetDate: new Date() },
        ],
      };
    }
    render() {
      return (
        <div>
          <h1>List Todo</h1>
          <div className="container">
            <table className="table">
              <thead>
                <tr>
                  <th>description</th>
                  <th>done</th>
                  <th>target date</th>
                </tr>
              </thead>
              <tbody>
                {this.state.todos.map((todo) => (
                  <tr key={todo.id}>
                    <td>{todo.description}</td>
                    <td>{todo.done.toString()}</td>
                    <td>{todo.targetDate.toString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  export default ListTodosComponent;