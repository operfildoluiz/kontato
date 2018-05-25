import React, { Component } from "react";
import DateUtils from "./../models/DateUtils";
// import { NavLink } from "react-router-dom";
// import configApp from "./../config/app";

export default class MessageForm extends Component {
  state = {
    id: 0,
    text: "",
    title: ""
  };

  componentDidMount() {
    this.setState({
      id: this.props.id,
      text: this.props.messageText,
      title: this.props.messageTitle
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div>
        <h5 className="subtitle">Editar Mensagens</h5>
        <form className="media" onSubmit={e => this.handleSubmit(e)}>
          <div className="media-content">
            <div className="field">
              <p className="control">
                <input
                  className="input"
                  placeholder="Título da mensagem"
                  value={this.state.title}
                  onChange={e => this.setState({ title: e.target.value })}
                />
              </p>
            </div>
            <div className="field">
              <p className="control">
                <textarea
                  className="textarea"
                  placeholder="Adicionar uma mensagem..."
                  value={this.state.text}
                  onChange={e => this.setState({ text: e.target.value })}
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
    );
  }
}
