import { server } from "./../config/axios";

const ContactServer = (() => {
  function getAll() {
    return server.get("/");
  }

  return {
    getAll
  };
})();

export default ContactServer;
