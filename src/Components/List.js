import React from "react";
import AddItem from "./AddItem";

class List extends React.Component {
  state = {
    items: [],
  };

  addTask = (newItem) => {
    this.setState((currentState) => {
      return { items: [...currentState.items, newItem] };
    });
  };

  render() {
    return (
      <>
        <div class="list">
          <h1>To do...</h1>
          <ul>
            {this.state.items.map((item) => {
              return (
                <>
                  <li key={item}>
                    <p>{item}</p>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
        <AddItem addTask={this.addTask} />
      </>
    );
  }
}
export default List;
