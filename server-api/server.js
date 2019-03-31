const compression = require("compression");
const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const cors = require("cors");

// Siakad Route
const getRoute = require("./routes/siakad-route-get");
const postRoute = require("./routes/siakad-route-post");
const signinRoute = require("./routes/siakad-route-signin-register");

const dosenRoute = require("./routes/dosen/dosen-route");
const mahasiswaRoute = require("./routes/mahasiswa/mahasiswa-route");

server.use(cors());
server.use(compression());
server.use(express.static("public"));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 5001;
server.listen(port, () => console.log(`Listening on port ${port}`));

// New Route
server.use(getRoute);
server.use(postRoute);
server.use(signinRoute);

server.use(dosenRoute);
server.use(mahasiswaRoute);
