const opmlToJs = require("opmltojs");
const request = require("request");
const fs = require("fs");
var urlOpmlFile = "https://github.com/kevinctofel/Wordle-Test/blob/main/wordleTest.opml.xml";
request(urlOpmlFile, function (err, response, data) {
  opmlToJs.parse(data, function (theOutline) {
    if (err) {
      console.log(err.message);
    }
    else {
      console.log(JSON.stringify(theOutline, undefined, 4));
      fs.writeFile("tweets.json", JSON.stringify(theOutline, undefined, 4))
    }
  });
});