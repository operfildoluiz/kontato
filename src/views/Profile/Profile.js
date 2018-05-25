import React, { Component } from "react";
import Header from "./../../components/Header";
import Hero from "./../../components/Hero";

import ContactService from "../../services/ContactService";
import { NavLink } from "react-router-dom";
import configApp from "./../../config/app";

class Profile extends Component {
  state = {
    user: "",
    title: "Carregando...",
    subtitle: ""
  };

  componentDidMount = () => {
    ContactService.read(this.props.match.params.id).then(res => {
      this.setState({
        user: res.data,
        title: res.data.name,
        subtitle: res.data.alias
      });
    });
  };

  handleRemove(ev) {
    ev.preventDefault();

    ContactService.remove(this.props.match.params.id).then(res => {
      this.props.history.push("/");
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Hero
          title={this.state.title}
          subtitle={this.state.subtitle}
          color="is-primary is-bold"
        />

        <section className="section">
          <div className="container">
            <div class="columns">
              <div className="column">
                Telefone: {this.state.user.phone}
                <br />Email: {this.state.user.email}
              </div>
              <div className="column has-text-right">
                <NavLink
                  to={`${configApp.base}edit/${this.props.match.params.id}`}
                  className="button is-success"
                >
                  Editar contato
                </NavLink>{" "}
                <button
                  className="button is-danger"
                  onClick={e => this.handleRemove(e)}
                >
                  Remover
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Profile;
