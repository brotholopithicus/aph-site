var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('server running at port 3000');
});
