// @ts-check
const express = require('express');
const { Builder, Nuxt } = require('nuxt');

const dev = process.env.NODE_ENV !== 'production';

const app = express();

const nuxt = new Nuxt({
  dev
});
if (dev) new Builder(nuxt).build();

app.use(nuxt.render);

app.listen(1234, () => {
  console.log('Serving 🐛 at http://localhost:1234');
});
