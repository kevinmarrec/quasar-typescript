<div align="center">

# Quasar TypeScript

A starter kit to build powerful and amazing native-looking apps, thanks to the Quasar Framework and TypeScript

</div>

<div align="center">

[![Made with Quasar](https://img.shields.io/badge/made%20with-Quasar-blue.svg?style=for-the-badge)](https://github.com/quasarframework/quasar)
[![Uses TypeScript](https://img.shields.io/badge/uses-TypeScript-3F51B5.svg?style=for-the-badge)](https://github.com/Microsoft/TypeScript)

[![License MIT](https://img.shields.io/github/license/kevinmarrec/quasar-typescript.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

</div>

<div align="center">

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

[![Build](https://img.shields.io/circleci/project/github/kevinmarrec/quasar-typescript/master.svg?style=for-the-badge)](https://circleci.com/gh/kevinmarrec/quasar-typescript/tree/master)
[![Coverage](https://img.shields.io/codecov/c/github/kevinmarrec/quasar-typescript/master.svg?style=for-the-badge)](https://codecov.io/gh/kevinmarrec/quasar-typescript/branch/master)

</div>

## Features ⚡️(WIP)

- [TypeScript](https://github.com/Microsoft/TypeScript) ✔
- [Pug](https://github.com/pugjs/pug) Template Engine ✔
- Internationalization (I18n) ✔
- SSR compliant using Quasar SSR ✔
- ...

## Built-in Tools 🔨

- [TSlint](https://github.com/palantir/tslint) TypeScript Linter configured with the [Standard](https://github.com/standard/standard) JavaScript Code Style
- Testing Suite using [Jest](https://github.com/facebook/jest)  (See `Testing` section)
- Configurable CI Pipeline using [CircleCI](https://circleci.com/) &  [Codecov](https://codecov.io)  (See `CI Pipeline` section)

## Installation 🔧 

**System prerequisites :**
- Pretested on Windows, Mac & Linux
- Node.js 8 LTS or 10 latest
- yarn > 1.9 (no guarantees if you prefer to use npm)

Clone this repository :
```bash
$ git clone git@github.com:kevinmarrec/quasar-typescript example
$ cd example
$ yarn
```

## Usage

```bash
$ yarn dev # Start a SPA server
$ yarn dev:ssr # Start a SSR + PWA server
```

## Testing (WIP)

## CI Pipeline (WIP)

## Building

You can build your application for production using :

```bash
$ yarn build # Build your SPA (it places the artifacts at /dist/spa-mat)
$ yarn build:ssr # Build your SSR + PWA (it places the artifacts at /dist/ssr-mat)
```

If you want then to clean build artifacts, just do :
```bash
$ yarn build:clean
```

## Serving

You can serve your production ready application locally using :

```bash
$ yarn serve # Serve your SPA
$ yarn serve:ssr # Serve your SSR + PWA
```

By default, SPA and SSR apps are respectively served on ports `4000` and `3000`

You can override the port using an environment variable :
```bash
$ PORT=3210 yarn serve # Serve your SPA on port 3210
$ PORT=3210 yarn serve:ssr # Serve your SSR + PWA on port 3210
```

## Deploy with Now.sh

Deploying with [Now](https://zeit.co/now) is a breeze. The Now CLI is already shipped in the starter kit development dependencies so all you need to do is :

```bash
$ yarn deploy # Deploy your SPA on Now.sh
$ yarn deploy:ssr # Deploy your SSR + PWA on Now.sh
```

> You might want to use a "now alias" or connect your domain to Now - or even look into automatic deployment with [their Github integration](https://zeit.co/blog/now-for-github).

`Now.sh` will install the dependencies automatically then run `$ yarn start`. Your website will be up and running on an HTTPS connection in a matter of seconds !

## References
* **Quasar 0.17.14** : [Website](https://quasar-framework.org) | [Documentation](https://quasar-framework.org/guide) | [Github](https://github.com/quasarframework/quasar)
* **Vue I18n 8.1.0** : [Website](https://kazupon.github.io/vue-i18n) | [Documentation](https://kazupon.github.io/vue-i18n/guide/started.html) | [Github](https://github.com/kazupon/vue-i18n)

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2018-present, Kevin Marrec
