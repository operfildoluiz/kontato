import React, { Component } from "react";
import Header from "./../../components/Header";
import Hero from "./../../components/Hero";
import CardList from "./../../components/CardList";

import ContactService from "../../services/ContactService";
import Contact from "../../models/Contact";

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loadingActions from "../../store/actions/loading";

class Dashboard extends Component {
  state = {
    contacts: []
  };

  componentDidMount = () => {
    this.props.toggleLoading(true);

    ContactService.getAll().then(res => {
      this.setState({
        contacts: res.data.map(item => new Contact(item))
      });

      this.props.toggleLoading(false);
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

// Redux State Binds
const mapDispatchToProps = dispatch => {
  return bindActionCreators(loadingActions, dispatch);
};

export default connect(null, mapDispatchToProps)(Dashboard);
