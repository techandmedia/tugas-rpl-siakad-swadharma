const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // server.get("/login", (req, res) => {
  //   return app.render(req, res, "/Login", req.query);
  // });

  server.get("/:id", (req, res) => {
    console.log(req.params.id);
    const actualPage = "/";
    const queryParams = { route: req.params.id };
    app.render(req, res, actualPage, queryParams);
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
