import React, { Component } from "react";
import Header from "./../../components/Header";
import Hero from "./../../components/Hero";
import CardList from "./../../components/CardList";

import ContactService from "../../services/ContactService";
import Contact from "../../models/Contact";

class Dashboard extends Component {
  state = {
    contacts: []
  };

  componentDidMount = () => {
    ContactService.getAll().then(res => {
      this.setState({
        contacts: res.data.map(item => new Contact(item))
      });
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Hero
          title="Seus contatos"
          subtitle="Aqui estão os contatos que você já cadastrou"
        />

        {this.state.contacts.length === 0 ? (
          <div className="notification has-text-centered">
            Você ainda não cadastrou um contato. Que tal{" "}
            <a href="">cadastrar agora?</a>
          </div>
        ) : (
          <div className="section">
            <CardList list={this.state.contacts} />
          </div>
        )}
      </div>
    );
  }
}

export default Dashboard;
