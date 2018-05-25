import { server } from "./../config/axios";

const ContactServer = (() => {
  function getAll(userId) {
    return server.get(`/${userId}/messages`);
  }

  function create(userId, message) {
    return server.post(`/${userId}/messages`, message);
  }

  function read(id) {
    return server.get(`/${id}`);
  }

  function remove(userId, id) {
    return server.delete(`/${userId}/messages/${id}`);
  }

  function update(userId, id, message) {
    return server.put(`/${userId}/messages/${id}`, message);
  }

  return {
    getAll,
    create,
    read,
    remove,
    update
  };
})();

export default ContactServer;
