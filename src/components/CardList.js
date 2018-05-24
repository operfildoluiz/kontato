import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import configApp from "./../config/app";

export default class CardList extends Component {
  render() {
    return (
      <div className="container">
        <div class="columns">
          {this.props.list.map((contact, i) => (
            <div class="column">
              <div class="card">
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img
                          src="https://bulma.io/images/placeholders/96x96.png"
                          alt="Profile"
                        />
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">{contact.name}</p>
                      <p class="subtitle is-6">
                        <i>{contact.alias}</i>
                      </p>
                    </div>
                  </div>
                  <div class="content">
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
