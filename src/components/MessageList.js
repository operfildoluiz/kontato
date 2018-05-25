import React, { Component } from "react";
import DateUtils from "./../models/DateUtils";
import MessageForm from "./MessageForm";

export default class MessageList extends Component {
  state = {
    showEdit: false
  };

  handleSubmit(content) {
    this.props.onEdit(content);
    this.setState({ showEdit: false });
  }

  render() {
    return (
      <div>
        <h2 className="subtitle">Mensagens</h2>
        {this.props.list.map((message, key) => (
          <article className="media" key={key}>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{message.title}</strong>{" "}
                  <small>{DateUtils.dateFormat(message.date)}</small>
                  <br />
                  {message.text}
                  <br />
                  <small>
                    <small>
                      <a
                        onClick={e =>
                          this.setState({ showEdit: !this.state.showEdit })
                        }
                      >
                        Editar
                      </a>{" "}
                      ·{" "}
                      <a onClick={e => this.props.onRemove(message.id)}>
                        Remover
                      </a>
                    </small>
                  </small>
                </p>
                {!this.state.showEdit ? null : (
                  <MessageForm
                    messageText={message.text}
                    messageTitle={message.title}
                    id={message.id}
                    onSubmit={this.handleSubmit.bind(this)}
                  />
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    );
  }
}
