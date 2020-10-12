import React, { Component } from 'react';

class UserForm extends Component {
  state = {
    firstName: 'Toto',
    lastName: 'Titi',
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {

    const { firstName, lastName } = this.state;
    return (
      <form
        className="UserForm"
        onSubmit={(event) => {
          event.preventDefault();
          console.log(this.state);
        }}
      >
        <div>
          Prénom : <input name="firstName" value={firstName} onChange={this.handleChange} />
        </div>
        <div>
          Nom : <input name="lastName" value={lastName} onChange={this.handleChange} />
        </div>
        <div>
          <button>Envoyer</button>
        </div>
      </form>
    );
  }
}

export default UserForm;
