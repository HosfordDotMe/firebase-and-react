import React, { Component } from 'react';
import fire from './fire';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { serials: [] }; // <- set up react state
  }
  componentWillMount(){
    /* Create reference to serials in Firebase Database */
    let serialsRef = fire.database().ref('serials').orderByKey().limitToLast(100);
    serialsRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ serials: [message].concat(this.state.serials) });
    })
  }
  addMessage(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    fire.database().ref('serials').push( this.inputEl.value );
    this.inputEl.value = ''; // <- clear the input
  }
  render() {
    return (
      <form onSubmit={this.addMessage.bind(this)}>
        <input type="text" ref={ el => this.inputEl = el }/>
        <input type="submit"/>
        <ul>
          { /* Render the list of serials */
            this.state.serials.map( message => <li key={message.id}>{message.text}</li> )
          }
        </ul>
      </form>
    );
  }
}

export default App;