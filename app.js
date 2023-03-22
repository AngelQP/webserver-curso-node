require ('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;


/* Configuración de options para no usar el app.get
const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: "index.html",
  maxAge: '1d',
  redirect: true,
  setHeaders (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
} */

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use( express.static('public') );

app.get('/', ( req, res ) => {
  res.render('home',{
    titulo: 'Curso de Node',
    nombre: 'Angel Quispe'
  });
});

app.get('/generic', ( req, res ) => {
  res.render('generic', {
    titulo: 'Curso de Node',
    nombre: 'Angel Quispe'
  });
});

app.get('/elements', ( req, res ) => {
  res.render('elements', {
    titulo: 'Curso de Node',
    nombre: 'Angel Quispe'
  });
});

app.get('*', ( req, res ) => {
  res.sendFile(__dirname + '/public/elements.html')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})