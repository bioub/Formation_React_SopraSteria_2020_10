import React, { Component } from 'react';

class ExHelloWorld extends Component {
  state = {
    prenom: 'Romain',
  };
  render() {
    const { prenom } = this.state;
    return (
      <div className="ExHelloWorld">
        <div>
          Prénom : <input value={prenom} onChange={(event) => this.setState({prenom: event.target.value})} />
        </div>
        <p>Bonjour {prenom}</p>
      </div>
    );
  }
}

export default ExHelloWorld;

/*
const inputEl = document.createElement('input');

inputEl.addEventListener('input', (event) => {
  // event.target === inputEl
});
*/
