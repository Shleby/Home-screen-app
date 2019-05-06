import React, { Component } from "react";
import "./Register.css";
import logo from "./logo.svg";

class RegisterComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        firstName: "",
        lastName: "",
        phone: "",
        age: ""
      },
      existingUser: {
        recordedFirstName: "",
        recordedLastName: "",
        recordedAge: "",
        recordedPhone: ""
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.clearInputFields = this.clearInputFields.bind(this);
  }

  /*Method checks for valid inputs such as a full 10 digit phone number,
  non-empty first and last names, and an age below 120 years.*/
  validateForm() {
    return (
      this.state.phone.length > 9 &&
      this.state.age.length < 3 &&
      this.state.age < 120 &&
      this.state.age > 0 &&
      this.state.firstName.length > 0 &&
      this.state.lastName.length > 0
    );
  }

  /*Handles the submit button. Checks to see if fields 
  are correctly filled out and then prints out the information. 
  After it clears the fields and resets the state variables.*/
  handleSubmit(e) {
    if (this.validateForm) {
      alert(
        "Full Name: " +
          this.state.firstName +
          " " +
          this.state.lastName +
          "\n" +
          "Age: " +
          this.state.age +
          "\n" +
          "Phone #: " +
          this.state.phone
      );
      e.preventDefault();
      this.clearInputFields();
    } else {
      alert("Please input a 10-digit phone number or a reasonable age.");
      this.clearInputFields();
    }
  }

  /*Resets the document fields and changes the state variables to null.*/
  clearInputFields() {
    document.getElementById("register").reset();
    this.setState({
      recordedFirstName: this.state.firstName,
      recordedLastName: this.state.lastName,
      recordedAge: this.state.age,
      recordedPhone: this.state.phone
    });
    this.setState({ firstName: null, lastName: null, age: null, phone: null });
  }

  /*Sets the state of the first name variable to the target value*/
  handleFirstNameChange(e) {
    this.setState({ firstName: e.target.value });
  }

  /*Sets the state of the last name variable to the target value*/
  handleLastNameChange(e) {
    this.setState({ lastName: e.target.value });
  }

  /*Sets the state of the age variable to the target value*/
  handleAgeChange(e) {
    this.setState({ age: e.target.value });
  }

  /*Sets the state of the phone variable to the target value*/
  handlePhoneChange(e) {
    this.setState({ phone: e.target.value });
  }

  /*Renders the form. Applies Register.css for style.*/
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="Register-header"
        id="register"
      >
        <img src={logo} className="Register-logo" alt="logo" />
        <div className="Register-container">
          <div>
            <label>First Name: </label>
            <input
              id="firstName"
              type="text"
              value={this.state.firstName}
              onChange={this.handleFirstNameChange}
            />
            <label>Last Name: </label>
            <input
              id="lastName"
              type="text"
              value={this.state.lastName}
              onChange={this.handleLastNameChange}
            />
            <label>Age: </label>
            <input
              id="age"
              type="number"
              value={this.state.age}
              onChange={this.handleAgeChange}
            />

            <label>Phone #: </label>
            <input
              id="phone"
              type="number"
              value={this.state.phone}
              onChange={this.handlePhoneChange}
            />
            <input type="submit" className="Register-submit" value="Submit" />
          </div>
        </div>
        <div className="Register-console">
          <dl>
            <h2 className="Header2">New User:</h2>
            <dt>
              <strong>Full Name: </strong>
            </dt>
            <dd>
              {this.state.firstName} {this.state.lastName}
            </dd>
            <dt>
              <strong>Age: </strong>
            </dt>
            <dd>{this.state.age}</dd>
            <dt>
              <strong>Phone #: </strong>
            </dt>
            <dd>{this.state.phone}</dd>
          </dl>
        </div>
        <div className="Register-second-console">
          <dl>
            <h2 className="Header2">Existing User:</h2>
            <dt>
              <strong>Full Name: </strong>
            </dt>
            <dd>
              {this.state.recordedFirstName} {this.state.recordedLastName}
            </dd>
            <dt>
              <strong>Age: </strong>
            </dt>
            <dd>{this.state.recordedAge}</dd>
            <dt>
              <strong>Phone #: </strong>
            </dt>
            <dd>{this.state.recordedPhone}</dd>
          </dl>
        </div>
      </form>
    );
  }
}

export default RegisterComp;
