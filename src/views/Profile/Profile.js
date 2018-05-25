import React, { Component } from "react";
import Header from "./../../components/Header";
import Hero from "./../../components/Hero";
import MessageList from "./../../components/MessageList";

import ContactService from "../../services/ContactService";
import MessageService from "../../services/MessageService";
import { NavLink } from "react-router-dom";
import configApp from "./../../config/app";

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loadingActions from "../../store/actions/loading";

class Profile extends Component {
  state = {
    user: { messages: [] },
    title: "Carregando...",
    subtitle: "",
    messageText: "",
    messageTitle: ""
  };

  componentDidMount = () => {
    this.props.toggleLoading(true);
    ContactService.read(this.props.match.params.id).then(res => {
      this.setState({
        user: res.data,
        title: res.data.name,
        subtitle: res.data.alias
      });

      this.performMessageList();
    });
  };

  performMessageList() {
    MessageService.getAll(this.props.match.params.id).then(res => {
      this.setState({
        user: {
          ...this.state.user,
          messages: res.data
        }
      });
    });

    this.props.toggleLoading(false);
  }

  handleRemove(ev) {
    ev.preventDefault();

    ContactService.remove(this.props.match.params.id).then(res => {
      this.props.history.push("/");
    });
  }

  handleDeleteMessage(messageId) {
    MessageService.remove(this.props.match.params.id, messageId).then(res => {
      let user = this.state.user;
      user.messages = user.messages.filter(item => item.id !== messageId);

      this.setState({ user });
    });
  }

  handleEditMessage(message) {
    MessageService.update(this.props.match.params.id, message.id, message).then(
      res => {
        this.performMessageList();
      }
    );
  }

  handleSubmit(ev) {
    ev.preventDefault();

    let message = {
      title: this.state.messageTitle,
      date: new Date().getTime(),
      text: this.state.messageText
    };

    MessageService.create(this.props.match.params.id, message).then(res => {
      let user = this.state.user;
      user.messages.push(res.data);

      this.setState({
        user,
        messageText: "",
        messageTitle: ""
      });
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
            <div className="columns">
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

        <div className="container">
          {this.state.user.messages.length > 0 ? (
            <MessageList
              list={this.state.user.messages}
              onEdit={this.handleEditMessage.bind(this)}
              onRemove={this.handleDeleteMessage.bind(this)}
            />
          ) : null}
          <hr />
          <h3 className="subtitle">Nova mensagem</h3>
          <form className="media" onSubmit={e => this.handleSubmit(e)}>
            <div className="media-content">
              <div className="field">
                <p className="control">
                  <input
                    className="input"
                    placeholder="Título da mensagem"
                    value={this.state.messageTitle}
                    onChange={e =>
                      this.setState({ messageTitle: e.target.value })
                    }
                  />
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <textarea
                    className="textarea"
                    placeholder="Adicionar uma mensagem..."
                    value={this.state.messageText}
                    onChange={e =>
                      this.setState({ messageText: e.target.value })
                    }
                  />
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <button className="button">Salvar</button>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// Redux State Binds
const mapDispatchToProps = dispatch => {
  return bindActionCreators(loadingActions, dispatch);
};

export default connect(null, mapDispatchToProps)(Profile);
