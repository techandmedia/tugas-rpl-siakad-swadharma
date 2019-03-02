const express = require("express");
const router = express.Router();
const mySQL = require("../config/my-sql");

exports.login = router.post("/api/users/login", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  mySQL.query("SELECT * FROM users WHERE email = ?", [email], function(
    error,
    results,
    fields
  ) {
    if (error) {
      res.send({
        code: 400,
        failed: "error ocurred"
      });
    } else {
      if (results.length > 0) {
        if (results[0].password === password) {
          // console.log(JSON.stringify(results));
          res.send(JSON.stringify(results));
          // res.send({
          //   code: 200,
          //   success: "login sucessfull"
          // });
        } else {
          res.send({
            code: 204,
            success: "Email and password does not match"
          });
        }
      } else {
        res.send({
          code: 205,
          success: "Email does not exits"
        });
      }
    }
  });
});

exports.postContact = router.post("/api/users/new", (req, res) => {
  var today = new Date();
  var users = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    role: req.body.role,
    email: req.body.email,
    password: req.body.password,
    created: today,
    modified: today
  };

  var first_name = req.body.first_name;
  var last_name = req.body.last_name;
  var role = req.body.role;
  var email = req.body.email;
  var password = req.body.password;

  if (
    first_name === "" ||
    first_name === null ||
    last_name == "" ||
    last_name == null ||
    role === "" ||
    role === null ||
    email === "" ||
    email === null ||
    password === "" ||
    password === null
  ) {
    res.send({
      code: 700,
      status: "empty field",
      message: "Input tidak boleh kosong"
    });
  } else {
    mySQL.query("SELECT * FROM users WHERE email = ?", [email], function(
      err,
      results,
      fields
    ) {
      if (err) {
        res.send({
          code: 400,
          status: "Failed",
          message: "Something wrong with the connection"
        });
      } else {
        if (results.length > 0) {
          if (results[0].email == email) {
            res.send({
              code: 204,
              status: "Failed",
              message:
                "This email address is already registered, please login instead"
            });
          }
        } else {
          mySQL.query(
            "INSERT INTO users SET ?",
            users,
            (err, results, fields) => {
              // res.send(JSON.stringify(results));
              res.send({
                code: 200,
                status: "Success",
                message: "User is successfully registered"
              });
            }
          );
        }
      }
    });
  }
});

module.exports = router;
