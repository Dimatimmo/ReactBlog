import React, { PureComponent } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import FormErrors from "./FormErrors"

export default class FormSignup extends PureComponent {

constructor() {
  super();
  this.state = {
    user: {
      email: "",
      password: "",
      repPassword: "",
      formErrors: {email: '', password: '', samePassword:''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  };

  this.handleInputChange = this.handleInputChange.bind(this);
}


validateField(fieldName, value) {
  let fieldValidationErrors = this.state.user.formErrors;
  let emailValid = this.state.user.emailValid;
  let passwordValid = this.state.user.passwordValid;
  let samePassword = this.state.user.samePassword;
switch(fieldName) {
    case 'email':
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      fieldValidationErrors.email = emailValid ? '' : 'email is invalid';
      break;
    case 'password':
      passwordValid = value.length >= 6;
      fieldValidationErrors.password = passwordValid ? '': 'password is too short';
      break;
    default:
      break;
  }
  this.setState({
                  ...this.state,
                  user: {
                    ...this.state.user,
                    formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid,
                    samePassword: samePassword
                  }
                }, this.validateForm);
}


validateForm() {
  this.setState({
  ...this.state,
  user: {
    ...this.state.user,
    formValid: this.state.user.emailValid &&
        this.state.user.passwordValid}
  });
}


handleInputChange = e => {
  const name = e.target.name;
  const value = e.target.value;
  this.setState({
                ...this.state,
                user: {
                  ...this.state.user,
                  [name]: value
                }
              },
              () => { this.validateField(name, value)});
};

errorClass(error) {
  return(error.length === 0 ? '' : 'has-error');
}

  render() {
    return (
      <form className="form">
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.user.formErrors} />
        </div>
        <div className="form__section">
          <label htmlFor="email">Email</label>
          <Input 
            className={`${this.errorClass(this.state.user.formErrors.email)}`}
            value={this.state.user.email}
            type="text"
            name="email"
            onChange={this.handleInputChange}/>
        </div>
        <div className="form__section">
          <label htmlFor="password">Password</label>
          <Input 
            className={`${this.errorClass(this.state.user.formErrors.password)}`}
            value={this.state.user.password}
            type="text"
            name="password"
            onChange={this.handleInputChange}/>
        </div>
        <div className="form__section">
          <Button onClick={this.handleSubmit} disabled={!this.state.user.formValid}>Sign up</Button>
        </div>
      </form>
    );
  }
}