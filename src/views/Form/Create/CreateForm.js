import React, { Component } from "react";
import Header from "./../../../components/Header";
import Hero from "./../../../components/Hero";

import ContactService from "../../../services/ContactService";

class CreateForm extends Component {
  state = {
    name: "",
    mail: "",
    phone: "",
    alias: "",
    invalidMail: false,
    showCompleted: false
  };

  handleSubmit(ev) {
    ev.preventDefault();

    if (!this.submitListener()) {
      ContactService.create({
        name: this.state.name,
        email: this.state.mail,
        phone: this.state.phone,
        alias: this.state.alias
      }).then(res => {
        this.clear();
      });
    }
  }

  submitListener = () => {
    if (
      this.state.name !== "" &&
      this.state.mail !== "" &&
      this.state.phone !== "" &&
      this.state.alias !== "" &&
      this.state.invalidMail === false
    ) {
      return false;
    }
    return true;
  };

  validateEmail(ev) {
    let mail = ev.target.value;
    let regExpCode = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "g"
    );

    ev.target.classList.remove("is-danger");
    this.setState({
      invalidMail: false
    });

    if (!regExpCode.test(mail)) {
      this.setState({
        invalidMail: true
      });
      ev.target.classList.add("is-danger");
    }

    this.setState({ mail });
  }

  clear() {
    this.setState({
      name: "",
      mail: "",
      phone: "",
      alias: "",
      invalidMail: false,
      showCompleted: true
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Hero
          color="is-dark"
          title="Cadastre um contato"
          subtitle="Assim será mais fácil para você se organizar :)"
        />

        {this.state.showCompleted ? (
          <div className="notification has-text-centered is-sucess">
            Seu contato foi cadastrado!
          </div>
        ) : null}
        <section className="section">
          <div className="container">
            <form onSubmit={e => this.handleSubmit(e)}>
              <div className="field">
                <label className="label">Nome</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Digite o nome completo"
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Apelido</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Como você chama essa pessoa?"
                    value={this.state.alias}
                    onChange={e => this.setState({ alias: e.target.value })}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    placeholder="Obrigatório"
                    value={this.state.mail}
                    onChange={e => this.validateEmail(e)}
                  />
                </div>
                {this.state.invalidMail ? (
                  <p className="help is-danger">O email é inválido</p>
                ) : null}
              </div>

              <div className="field">
                <label className="label">Telefone</label>
                <div className="control">
                  <input
                    className="input"
                    type="phone"
                    placeholder="00 0000-0000"
                    value={this.state.phone}
                    onChange={e => this.setState({ phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  <button
                    className="button is-link"
                    type="submit"
                    disabled={this.submitListener()}
                  >
                    Cadastrar
                  </button>
                </div>
                <div className="control">
                  <button
                    className="button is-text"
                    onClick={e => this.props.history.goBack()}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default CreateForm;
