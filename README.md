# K2 JSSP Spreadsheet Reader

A K2 JSSP based broker that can ingest Excel or CSV files and return as a list that can be displayed in K2 SmartForm list view.

# Features

- Dynamically generated service objects based on Excel or CSV headers.

## Getting Started

This app requires [Node.js](https://nodejs.org/) v12.14.1+ to run.
This app also requires an accompanying ASP .NET Core app to digest and process Excel or CSV files. Reach out to kevin.seechan@nintex.com to obtain the source code for this app.

Install the dependencies and devDependencies:

```bash
npm install
```

Alternatively, use pnpm to reduce the size of the `node_modules` directory:

```bash
npm install -g pnpm # Only required once
pnpm install
```

See the documentation for [@k2oss/k2-broker-core](https://www.npmjs.com/package/@k2oss/k2-broker-core)
for more information about how to use the broker SDK package.

## Running Unit Tests

To run the unit tests, run:

```bash
npm test
pnpm test # Alternative
```

You can also use a development build, for debugging and coverage gutters:

```bash
npm run test:dev
pnpm run test:dev # Alternative
```

You will find the code coverage results in [coverage/index.html](./coverage/index.html).

## Building your bundled JS

When you're ready to build your broker, run the following command

```bash
npm run build
pnpm run build # Alternative
```

You will find the results in the [dist/index.js](./dist/index.js).

## Creating a service type

Once you have a bundled .js file, upload it to your repository (anonymously
accessible) and register the service type using the system SmartObject located
at System > Management > SmartObjects > SmartObjects > JavaScript Service
Provider and run the Create From URL method.

### License

MIT, found in the [LICENSE](./LICENSE) file.

[www.k2.com](https://www.k2.com)
