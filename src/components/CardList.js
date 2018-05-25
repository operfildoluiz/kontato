import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import configApp from "./../config/app";

export default class CardList extends Component {
  render() {
    return (
      <div className="container">
        <div className="columns">
          {this.props.list.map((contact, i) => (
            <div className="column" key={i}>
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img
                          src="https://bulma.io/images/placeholders/96x96.png"
                          alt="Profile"
                        />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">{contact.name}</p>
                      <p className="subtitle is-6">
                        <i>{contact.alias}</i>
                      </p>
                    </div>
                  </div>
                  <div className="content">
                    <a href="#phone">{contact.phone}</a> •{" "}
                    <a href="#mail">{contact.email}</a>
                  </div>
                  <NavLink
                    to={`${configApp.base}profile/${contact.id}`}
                    className="button is-primary is-small"
                  >
                    Ver contato
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
