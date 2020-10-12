import React, { Component } from 'react';

class ExHelloWorld extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const {} = this.state;
    return (
      <div className="ExHelloWorld">
        <div>
          Prénom : <input />
        </div>
        <p>Bonjour {/* affiche en temps réel le prénom saisi */}</p>
      </div>
    );
  }
}

export default ExHelloWorld;
