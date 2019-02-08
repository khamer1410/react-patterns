import React, { Component } from "react";

export default class FormPage extends Component {
  state = {
    loading: false,
    error: false
  };

  handleChange = event => {
    const { name, type, value } = event.target
    const staticValue = type === 'number' ? parseFloat(value) : value

    this.setState({[name] : staticValue})
  }

  handleSubmit = event => {

    event.preventDefault();
    console.log(event);
  };

  render() {
    const { loading, error } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <fieldset disabled={loading} aria-busy={loading}>
            <label htmlFor="name">
              Name
              <input
              type="text"
              id="name"
              name="name"
              placeholder="name"
              required
              onChange={this.handleChange} />
            </label>
          </fieldset>

          <fieldset disabled={loading} aria-busy={loading}>
            <label htmlFor="price">
              Price
              <input
              type="number"
              id="price"
              name="price"
              placeholder="price"
              required
              onChange={this.handleChange} />
            </label>
          </fieldset>

          <fieldset disabled={loading} aria-busy={loading}>
            <label htmlFor="description">
              Description
              <textarea
              id="description"
              name="description"
              placeholder="description"
              required
              onChange={this.handleChange} />
            </label>
          </fieldset>

          <button type="submit">GO!</button>
        </form>
      </div>
    );
  }
}
