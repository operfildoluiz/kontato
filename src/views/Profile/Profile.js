import React, { Component } from "react";
import Header from "./../../components/Header";
import Hero from "./../../components/Hero";

import ContactService from "../../services/ContactService";

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
            Telefone: {this.state.user.phone}
            <br />Email: {this.state.user.email}
          </div>
        </section>
      </div>
    );
  }
}

export default Profile;
