import React, { Component } from 'react';

class EchoWebSocket extends Component {
  constructor() {
    super();
    this.state = {
      newMessage: '',
      messages: []
    };
  }

  storeMessage = (event) => {
    this.setState({
      messages: [event.data, ...this.state.messages],
    });
  }

  componentDidMount() {
    this._ws = new WebSocket('wss://echo.websocket.org');
    this._ws.addEventListener('message', this.storeMessage);
  }

  componentWillUnmount() {
    this._ws.removeEventListener('message', this.storeMessage);
    this._ws.close();
  }

  handleChange = (event) => {
    this.setState({
      newMessage: event.target.value,
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this._ws.send(this.state.newMessage);
  }

  render() {
    const { messages, newMessage } = this.state;
    return (
      <div className="Clock Select">
        <form onSubmit={this.handleSubmit}>
          <input value={newMessage} onChange={this.handleChange} />
          <button>+</button>
        </form>
        <h2>Réponse du serveur :</h2>
        <ul className="messages">
          {messages.map((m) => <li key={m}>{m}</li>)}
        </ul>
      </div>
    );
  }
}

export default EchoWebSocket;
