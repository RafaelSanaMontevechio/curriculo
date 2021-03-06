const express = require('express');
const path =  require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
  response.render('home');
});

app.get('/information', (request, response) => {
  response.render('information');
});

app.listen(3000, (err) => {
  if (err) {
    console.log('Error ao carregar :(');
  } else {
    console.log('Servidor rodando :)');
  }
}); 