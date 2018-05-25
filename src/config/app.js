const configApp = {
  base: process.env.NODE_ENV === "production" ? "/build/" : "/",
  endpoint: {
    contacts: "https://5ae3b92d34b5970014d2ee37.mockapi.io/contacts"
  }
};

export default configApp;
