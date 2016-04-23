var express = require('express');
var request = require('request');

const API_KEY = process.env.API_KEY;
const app = express();


app.use(express.static('./public'));

app.get('/spotify/search', function(req, res) {
  request(`https://api.spotify.com/v1/search?q=${req.query.q}&type=track,artist`)
    .pipe(res);
});


app.listen(3000, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('App listen 3000');
  }
});
