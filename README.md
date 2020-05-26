# Flumer
> A lightweight, highly extendable logger for both client and server JS applications

[![Build Status](https://travis-ci.org/Drew-Kimberly/flumer.svg?branch=master)](https://travis-ci.org/Drew-Kimberly/flumer)
[![Coverage Status](https://coveralls.io/repos/github/Drew-Kimberly/flumer/badge.svg?branch=master)](https://coveralls.io/github/Drew-Kimberly/flumer?branch=master)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


## Packages

#### [@flumer/core](./packages/core)

#### [@flumer/logger](./packages/logger)


## Development

### Conventional Commits
To commit changes, run:
```shell script
npm run commit
```

This will run the [Commitizen](https://github.com/commitizen/cz-cli) wizard to enforce conventional commit standards.


### Packages Releases
Flumer packages are published to NPM using [Semantic Release](https://github.com/semantic-release/semantic-release). Specifically,
we use the [Lerna Semantic Release Changelog](https://github.com/atlassian/lerna-semantic-release) to facilitate the monorepo codebase format.

The publishing happens in our CI/CD process using TravisCI from within the `release` build stage that only runs when
changes are merged into the `master` branch.
