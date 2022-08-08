export default process.env.NODE_ENV === "production?"
  ? "https://neurobica-authtest.herokuapp.com"
  : "http://localhost:9876";
