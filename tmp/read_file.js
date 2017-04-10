var fs = require("fs");

fs.readFile(process.argv, function(err, data) {
  if (err) {
    return console.log(err);
  }
  console.log("Test Async: " + data.toString());
});
