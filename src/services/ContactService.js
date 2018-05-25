import { server } from "./../config/axios";

const ContactServer = (() => {
  function getAll() {
    return server.get("/");
  }

  function create(contact) {
    return server.post("/", contact);
  }

  function read(id) {
    return server.get(`/${id}`);
  }

  function remove(id) {
    return server.delete(`/${id}`);
  }

  function update(id, contact) {
    return server.put(`/${id}`, contact);
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
