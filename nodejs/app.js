const express = require('express');
const { faker } = require('@faker-js/faker');
const { Typeauth } = require('@typeauth/api-node');



const app = express();
app.use(express.json());

const typeauth = new Typeauth({
  appId: 'YOUR_APPID',
  // Optional configuration options
  // tokenHeader: 'Authorization',
  // disableTelemetry: false,
  // maxRetries: 3,
  // retryDelay: 1000,
});

app.use(async (req, res, next) => {
  const authResult = await typeauth.authenticate(req);
  if (authResult.result) {
    // Authentication succeeded
    next();
  } else {
    // Authentication failed
    res.status(401).json({ error: authResult.error });
  }
});

const generateProduct = () => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  price: parseFloat(faker.commerce.price()),
  category: faker.commerce.department(),
  image: faker.image.imageUrl(),
});

// Get all products
app.get('/products', (req, res) => {
  const products = Array.from({ length: 10 }, () => generateProduct());
  res.json(products);
});

// Get a single product by ID
app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  const product = generateProduct();
  product.id = id;
  res.json(product);
});

// Create a new product
app.post('/products', (req, res) => {
  const product = req.body;
  product.id = faker.datatype.uuid();
  res.status(201).json(product);
});

// Update a product by ID
app.put('/products/:id', (req, res) => {
  const product = req.body;
  const id = req.params.id;
  product.id = id;
  res.json(product);
});

// Delete a product by ID
app.delete('/products/:id', (req, res) => {
  res.status(204).send();
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('Not Found.');
});

module.exports = app;