export default process.env.NODE_ENV === "development"
  ? "http://localhost:5011"
  : process.env.NODE_ENV === "production" &&
    "https://snippet-manager-server.herokuapp.com";
