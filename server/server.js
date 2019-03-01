const compression = require("compression");
const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const cors = require("cors");
// const contactRoute = require("./routes/route-contact");
// const employeeRoute = require("./routes/route-employee");
// const productRoute = require("./routes/route-product");
// const userRoute = require("./routes/route-user");
// const adminRoute = require("./routes/route-admin");
// const dosenRoute = require("./routes/route-dosen");
// const mahasiswaRoute = require("./routes/route-mahasiswa");


// Siakad Route
const getRoute = require("./routes/siakad/siakad-route-get");
const postRoute = require("./routes/siakad/siakad-route-post");
const signinRoute = require('./routes/siakad/siakad-route-signin-register')

server.use(cors());
server.use(compression());
server.use(express.static("public"));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 5001;
server.listen(port, () => console.log(`Listening on port ${port}`));

// const baseURL = "/api/"
// perhatikan pemakaian route, di sini apis nya adalah '/api/contacts', sedangkan di file route nya adalah '/'
// server.use(userRoute);
// server.use(adminRoute);
// server.use(dosenRoute);
// server.use(mahasiswaRoute);

// New Route
server.use(getRoute);
server.use(postRoute);
server.use(signinRoute);

