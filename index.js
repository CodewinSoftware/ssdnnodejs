var http = require("http");
var express = require("express");
const cors = require("cors");
var app = express();
var mysql = require("mysql");
var bodyParser = require("body-parser");

app.use(cors());

//start mysql connection
var connection = mysql.createConnection({
  host: "localhost:3306", //mysql database host name
  user: "i9881833_rmk91", //mysql database user name
  password: "(2M.oHNcl}yu", //mysql database password
  database: "ssdntest", //mysql database name
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("You are now connected with mysql database...");
});
//end mysql connection

//start body-parser configuration
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);
//end body-parser configuration

//create app server
var server = app.listen(3002, "127.0.0.1", function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});

//rest api to get all customers
app.get("/", function (req, res) {
  connection.query(
    `SELECT v.*, c.id as category_id, c.name as category_name, c.slug as category_slug, c.heading as category_heading,
   pc.id as parent_category_id, pc.name as parent_category_name, pc.slug as parent_category_slug, pc.heading as parent_category_heading
FROM vouchers v
LEFT JOIN categories c ON v.voucher_category_id = c.id
LEFT JOIN categories pc ON v.voucher_child_category_id = pc.id
WHERE v.slug = 'citrix-certification-assessment-voucher'
LIMIT 1`,
    function (error, results1, fields) {
      if (error) throw error;
      console.log("results.related_assessment", results1[0].related_assessment);
      // console.log("result1",JSON.stringify(results1));
      if (results1[0].related_assessment) {
        connection.query(
          `SELECT a.*, c.id AS category_id, c.name AS category_name, c.slug AS category_slug FROM assessments a JOIN categories c ON a.id = c.id WHERE EXISTS ( SELECT 1 FROM assessments a2 WHERE a2.id IN (1) AND a2.id = a.id ) ORDER BY FIELD(a.id, 1)`,
          (error, results2, fields) => {
            if (error) throw error;
            // Process results
            let results1final = results1;
            let results2final = results2;
            console.log("results1", results1final);
            console.log("results2", results2final);
            const completeresult = results1final.concat(results2final);
            const data = {
              status: "success",
              message: "Get voucher",
              result: completeresult,
            };
            res.end(JSON.stringify(data));
          }
        );
      }
    }
  );
});
//rest api to get a single customer data
app.get("/customer/:id", function (req, res) {
  connection.query(
    "select * from customers where Id=?",
    [req.params.id],
    function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});

//rest api to create a new customer record into mysql database
app.post("/customer", function (req, res) {
  var params = req.body;
  console.log(params);
  connection.query(
    "INSERT INTO customer SET ?",
    params,
    function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});

//rest api to update record into mysql database
app.put("/customer", function (req, res) {
  connection.query(
    "UPDATE `customer` SET `Name`=?,`Address`=?,`Country`=?,`Phone`=? where `Id`=?",
    [
      req.body.Name,
      req.body.Address,
      req.body.Country,
      req.body.Phone,
      req.body.Id,
    ],
    function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});

//rest api to delete record from mysql database
app.delete("/customer", function (req, res) {
  console.log(req.body);
  connection.query(
    "DELETE FROM `customer` WHERE `Id`=?",
    [req.body.Id],
    function (error, results, fields) {
      if (error) throw error;
      res.end("Record has been deleted!");
    }
  );
});
