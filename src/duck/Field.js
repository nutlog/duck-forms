import React, { Component } from 'react';
import { connect } from 'react-redux';
import { change, registerField } from './actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: value => {
      dispatch(change(ownProps.form.name, ownProps.name, value));
    },
    registerField: () =>
      dispatch(registerField(ownProps.form.name, ownProps.name)),
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    value: state[ownProps.form.name]
      ? state[ownProps.form.name][ownProps.name]
      : '',
  };
};

class Field extends Component {
  handleChange = e => {
    this.props.onChange(e.target.value);
  };

  componentDidMount() {
    this.props.registerField();
  }

  render() {
    return this.props.children(this.handleChange, this.props.value);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Field);
