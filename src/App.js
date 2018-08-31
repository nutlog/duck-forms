import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './duck/reducers';
import Form from './duck/Form';
import Field from './duck/Field';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <div>
          <Form name="test">
            {formInstance => (
              <div>
                <Field name="field1" form={formInstance}>
                  {(onChange, value) => (
                    <input
                      type="text"
                      placeholder="Hello"
                      onChange={onChange}
                      value={value}
                    />
                  )}
                </Field>
                <Field name="field2" form={formInstance}>
                  {(onChange, value) => (
                    <input
                      type="number"
                      placeholder="Hello"
                      onChange={onChange}
                      value={value}
                    />
                  )}
                </Field>
                <button onClick={formInstance.submit}>Submit</button>
              </div>
            )}
          </Form>
          <button>Submit From Outside Form</button>
        </div>
      </Provider>
    );
  }
}

export default App;
