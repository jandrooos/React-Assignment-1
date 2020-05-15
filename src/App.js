import React, { Component } from "react";
import UserInput from "./UserInput";
import UserOutput from "./UserOutput";
import "./App.css";

class App extends Component {
  state = {
    users: [
      { username: "Jandro", age: 22 },
      { username: "TaterTot", age: 22 },
      { username: "BrilaBril", age: 26 },
    ],
  };

  inputChangeHandler = (event) => {
    this.setState({
      users: [
        { username: event.target.value, age: 22 },
        { username: "TaterTot", age: 22 },
        { username: "BrilaBril", age: 26 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>
            UserInput should hold an input element, UserOutput two paragraphs
          </li>
          <li>
            Output multiple UserOutput components in the App component (any
            paragraph texts of your choice)
          </li>
          <li>
            Pass a username (of your choice) to UserOutput via props and display
            it there
          </li>
          <li>
            Add state to the App component (=> the username) and pass the
            username to the UserOutput component
          </li>
          <li>
            Add a method to manipulate the state (=> an event-handler method)
          </li>
          <li>
            Pass the event-handler method reference to the UserInput component
            and bind it to the input-change event
          </li>
          <li>
            Ensure that the new input entered by the user overwrites the old
            username passed to UserOutput
          </li>
          <li>
            Add two-way-binding to your input (in UserInput) to also display the
            starting username
          </li>
          <li>
            Add styling of your choice to your components/ elements in the
            components - both with inline styles and stylesheets
          </li>
        </ol>

        <UserOutput name={this.state.users[0].username} />
        <UserOutput name={this.state.users[1].username} />
        <UserOutput name={this.state.users[2].username} />

        <UserInput
          changed={this.inputChangeHandler}
          currentName={this.state.users[0].username}
        />
      </div>
    );
  }
}

export default App;
