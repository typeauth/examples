# Hono JS Library

This is an  Hono JS implementation for library for integrating TypeAuth authentication into your application.


> This implementation has been running using Cloudflare Workers.


## Installation

To install the TypeAuth Hono JS library, use npm:

```bash
npm install
```

## Configuration

Before using the library, you need to configure it with your TypeAuth Application.

Make sure to replace `'YOUR_APP_ID'` with your actual TypeAuth application ID, you can find it in the [dashboard](https://app.typeauth.com)

```javascript
const typeauth = new Typeauth({
  appId: "YOUR_APP_ID",
});
```


## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).
