import React, { Component } from 'react';

class RegistrationForm extends Component {
  render() {
    return (
      <div>
        <form>
          Username: <br>
          <input type="text" name="username">
          Password: <br>
          <input type="password" name="password">
        </form>
      </div>
      );
  }
}

export default RegistrationForm;