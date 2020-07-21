import React, { Component } from "react";

class AddItem extends Component {
  state = {
    input: "",
  };
  render() {
    const { input } = this.state;
    return (
      <form 
        onSubmit={event => {
          event.preventDefault();
          this.props.addTask(input);
          this.setState({ input: "" });
        }}
      >
        <label>
          New Task:
          <input
            type="text"
            name="newItem"
            onChange={this.handleChange}
            value={this.state.input}
            required
          />
        </label>
        <button type="onSubmit">Add new item...</button>
      </form>
    );
  }
  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { input } = this.state;
    this.props.addTask(input);
    this.setState({ input: "" });
  };
}

export default AddItem;
