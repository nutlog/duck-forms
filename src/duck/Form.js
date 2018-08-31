import React, { Component } from 'react';

class Form extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log('Submit!');
  };

  render() {
    const formInstance = {
      submit: this.handleSubmit,
      name: this.props.name,
    };
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.children(formInstance)}
      </form>
    );
  }
}

export default Form;
