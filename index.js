const app = require("./app");   // Importing Express App
const port = process.env.PORT || "8000";

// Starting server
app.listen(port, () => {
  console.log(`Listening to requests on ${port}`);
});