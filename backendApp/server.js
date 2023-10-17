console.log('Server-side code running'); // lil test to make sure it works :)

const mysql = require('mysql2');
var bodyParser = require('body-parser')
const connection = mysql.createConnection({
	host : 'localhost',
  port: 3306,
	database : 'EXAMPLE',
	user : 'root',
	password : 'Enjoytheride2022!'
});

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO POLL1 (yes, no) VALUES ('1', '0')";
//   connection.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});



// connection.end();
// create server
const express = require('express');
const app = express();
// cors stuff
const cors = require('cors');
app.use(cors({
    origin: 'null'
}));
app.use(bodyParser.json());

// create an app instance
// app.use(api, router);
// app.all("*", (req, res, next) => {
//   next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
//  });
//  app.use(errorHandler);

// serve files from the public directory
app.use(express.static('public'));

// start the express web server listening on 8080
const PORT = 3000; // was 3000
app.listen(PORT, () => {
 console.log(`server running on port ${PORT}`);
});

module.exports = app;

// app.listen(8080, () => {
//   console.log('listening on 8080');
// });
// module.exports = app;

// serve the homepage
app.post('/addData', (req, res) => {
console.log(req.body);
console.log(req.body.name);
if (req.body.name == 1) {
  const values = ['1', '0'];
  connection.query(
 
    "INSERT INTO POLL1 (yes, no) VALUES(?)",
    [values],
   );
   console.log('added a yes into the database');
}
if (req.body.name == 0)  {
  const values = ['0', '1'];
  connection.query(
 
    "INSERT INTO POLL1 (yes, no) VALUES(?)",
    [values],
   );
   console.log('added a no into the database');
}
  // res.sendFile(__dirname + '/client/poll.html');
});

//  app.post('/poop', (req, res) => {
//   console.log('hit the POOP link');
//   res.json({caroline: 1});
// });

// lil attempt to format yes and no answers
// exports.updateTableNo = (req, res, next) => {
//   // add if statments depending on button clicked 
// const values = ['0', '1'];
//  conn.query(
//    "INSERT INTO POLL1 (yes, no) VALUES(?)",
//    [values],
//   );
//  };

//  exports.updateTableYes = (req, res, next) => {
//   // add if statments depending on button clicked 
// const values = ['1', '0'];
//  conn.query(
//    "INSERT INTO POLL1 (yes, no) VALUES(?)",
//    [values],
//   );
//  };









