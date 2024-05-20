# Express Node.js Library

This is an Express Node.js implementation for library for integrating TypeAuth authentication into your application.

## Installation

To install the TypeAuth Node.js library, use npm:

```bash
npm install
```

## SSL/TLS Certificates

To enable HTTPS for your application, you need to obtain SSL/TLS certificates. This library uses the `greenlock-express` package to automatically obtain and renew certificates from Let's Encrypt.

Before running your application, execute the following commands to initialize the certificate configuration:

```bash
npx greenlock init --config-dir ./greenlock.d --maintainer-email 'username@email.com'
npx greenlock add --subject example.com --altnames example.com
```

Make sure to replace `'username@email.com'` with your email address and `example.com` with your domain name.

## Configuration

Before using the library, you need to configure it with your TypeAuth Application.

Make sure to replace `'YOUR_APP_ID'` with your actual TypeAuth application ID, you can find it in the [dashboard](https://app.typeauth.com)

```javascript
const typeauth = new Typeauth({
  appId: "YOUR_APP_ID",
});
```

## Running the Application

To start your application with TypeAuth authentication and SSL/TLS support, run:

```bash
node server.js
```

Your application will be accessible over HTTPS on the specified domain.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).
