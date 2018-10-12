import React, { Component } from 'react';
import logo from './logo.svg';
import contactsData from "./data/contacts.json";
import './App.css';

const showContact = data => (
  <div className="contact" data-id="id" key={data.email}>
    <span className="avatar small">☻</span>
    <span className="title">{data.firstName} {data.lastName}</span>
  </div>
);
class App extends Component {
  render() {
    return (
      <div className="container">
        <header>✉ Contact Book</header>
        <div id="book">
          <div id="list">
            <h1>Contacts</h1>
            <div className="content">
              {contactsData.map(showContact)}

            </div>
          </div>
          <div id="details">
            <h1>Details</h1>
            <div className="content">
              <div className="info">
                <div className="col">
                  <span className="avatar">☻</span>
                </div>
                <div className="col">
                  <span className="name">Thanh</span>
                  <span className="name">Thinh</span>
                </div>
              </div>
              <div className="info">
                <span className="info-line">☎ 0887 123 456</span>
                <span className="info-line">✉ thanhthinhcntt@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <footer>Contact Book SPA © 2018</footer>
      </div>
    );
  }
}

export default App;
