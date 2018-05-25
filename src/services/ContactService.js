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

  return {
    getAll,
    create,
    read,
    remove
  };
})();

export default ContactServer;
