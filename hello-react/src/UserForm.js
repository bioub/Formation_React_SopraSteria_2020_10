import React, { Component } from 'react';

class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: 'Toto',
      lastName: 'Titi',
    };
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
          Prénom :{' '}
          <input
            value={firstName}
            onChange={(event) => {
              this.setState({ firstName: event.target.value });
            }}
          />
        </div>
        <div>
          Nom :{' '}
          <input
            value={lastName}
            onChange={(event) => {
              this.setState({ lastName: event.target.value });
            }}
          />
        </div>
        <div>
          <button>Envoyer</button>
        </div>
      </form>
    );
  }
}

export default UserForm;
