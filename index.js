// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
const { path } = require('express/lib/application');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/:date", (req, res) => {
  const dateParam = req.params.date;
  
  // Handle both unix timestamp and date string
  let parsedDate = /^\d+$/.test(dateParam) 
      ? new Date(parseInt(dateParam)) 
      : new Date(dateParam);
  
  // Check if date is valid
  if (isNaN(parsedDate.getTime())) {
      return res.json({ error: "Invalid Date" });
  }

  
  // Return both unix timestamp and UTC string
  res.json({
      unix: parsedDate.getTime(),
      utc: parsedDate.toUTCString()
  })
});

app.get("/api", (req,res) => {
  date = new Date();
  res.json({unix: date.getTime(), utc: date.toUTCString()})
})


app.get("/now", (req,res) => {
  res.sendFile(absolutePath = __dirname,"https://www.freecodecamp.org/")
})

// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

