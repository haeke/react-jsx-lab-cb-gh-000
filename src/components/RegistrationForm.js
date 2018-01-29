import React, { Component } from 'react';

class RegistrationForm extends Component {
  render() {
    return (
        <form action="#">
          Username
          <input type="text" name="username"/>
          Password
          <input type="password" name="password" />
          <button type="submit" />
        </form>
      );
  }
}

export default RegistrationForm;