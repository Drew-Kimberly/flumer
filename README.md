# Flumer
> A lightweight, highly extendable logger for both client and server JS applications

[![CI/CD Status](https://github.com/drew-kimberly/flumer/workflows/CI%20%2F%20CD/badge.svg?branch=master)](https://github.com/Drew-Kimberly/flumer/actions?query=workflow%3A%22CI%20%2F%20CD%22+branch%3Amaster)
[![Coverage Status](https://coveralls.io/repos/github/Drew-Kimberly/flumer/badge.svg?branch=master)](https://coveralls.io/github/Drew-Kimberly/flumer?branch=master)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


## Packages

#### [@flumer/core](./packages/core)

#### [@flumer/logger](./packages/logger)


## Development

### Getting Started
Clone this repository and from the root run:
```
yarn
```

### Running Tests
From the repository root, run:
```
yarn test
```

### Running Static Analysis (ESLint)
From the repository root, run:
```
yarn run check
```

### Compiling Packages
From the repository root, run:
```
yarn compile
```

### Conventional Commits
To commit changes, run:
```shell script
yarn commit
```

This will run the [Commitizen](https://github.com/commitizen/cz-cli) wizard to enforce conventional commit standards.


### Packages Releases
Flumer packages are published to NPM using [Semantic Release](https://github.com/semantic-release/semantic-release). Specifically,
we use the [Lerna Semantic Release Changelog](https://github.com/atlassian/lerna-semantic-release) to facilitate the monorepo codebase format.

The publishing happens in our CI/CD process using Github Actions from within the `release` build stage that only runs when
changes are merged into the `master` branch.
