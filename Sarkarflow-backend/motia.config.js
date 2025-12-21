module.exports = {
  name: "sarkarflow",
  runtime: "nodejs",
  entry: "index.js",
  workflowsDir: "./workflows",
  eventsDir: "./events",
  env: {
    PORT: 3000
  }
};
