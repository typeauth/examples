import { Hono } from 'hono';
import { typeauthMiddleware } from '@typeauth/hono';
import { faker } from '@faker-js/faker';

const app = new Hono();

const config = {
	appId: 'bqxPXDSsRht52F76RkHup',
};

app.use(typeauthMiddleware(config));

// Generate fake product data
const generateProduct = () => ({
	id: faker.datatype.uuid(),
	name: faker.commerce.productName(),
	description: faker.commerce.productDescription(),
	price: parseFloat(faker.commerce.price()),
	category: faker.commerce.department(),
	image: faker.image.imageUrl(),
});

// Get all products
app.get('/products', (c) => {
	const products = Array.from({ length: 10 }, () => generateProduct());
	return c.json(products);
});

// Get a single product by ID
app.get('/products/:id', (c) => {
	const id = c.req.param('id');
	const product = generateProduct();
	product.id = id;
	return c.json(product);
});

// Create a new product
app.post('/products', async (c) => {
	const product = await c.req.json();
	product.id = faker.datatype.uuid();
	return c.json(product, 201);
});

// Update a product by ID
app.put('/products/:id', async (c) => {
	const product = await c.req.json();
	const id = c.req.param('id');
	product.id = id;
	return c.json(product);
});

// Delete a product by ID
app.delete('/products/:id', (c) => {
	return c.json(null, 204);
});

// 404 handler
app.all('*', (c) => {
	return c.text('Not Found.', 404);
});

export default app;
