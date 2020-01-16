import React, { PureComponent } from "react";
import Button from "../common/Button";
import Input from "../common/Input";

export default class AuthSignin extends PureComponent {
  constructor() {
    super();
    this.state = {
      user: {
        email: "",
        password: ""
      }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount(){
    console.log(this.state.user)
  }
  componentDidUpdate(){
    console.log(this.state.user)
  }

  handleInputChange = e => {
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <form className="form">
        <div className="form__section">
          <label htmlFor="email">Email</label>
          <Input 
            value={this.state.user.email}
            type="text"
            name="email"
            onChange={this.handleInputChange}/>
        </div>
        <div className="form__section">
          <label htmlFor="password">Password</label>
          <Input 
            value={this.state.user.password}
            type="text"
            name="password"
            onChange={this.handleInputChange}/>
        </div>
        <div className="form__section">
          <Button onClick={this.handleSubmit}>Sign in</Button>
        </div>
      </form>
    );
  }
}
