# zssport round
[![Build Status](https://travis-ci.org/zsagasport/zssport-round.svg?branch=master)](https://travis-ci.org/zsagasport/zssport-round)
[![npm version](https://badge.fury.io/js/zssport-round.svg)](http://badge.fury.io/js/zssport-round)
[![devDependency Status](https://david-dm.org/zsagasport/zssport-round/dev-status.svg)](https://david-dm.org/zsagasport/zssport-round#info=devDependencies)
[![GitHub issues](https://img.shields.io/github/issues/zsagasport/zssport-round.svg)](https://github.com/zsagasport/zssport-round/issues)
[![GitHub stars](https://img.shields.io/github/stars/zsagasport/zssport-round.svg)](https://github.com/zsagasport/zssport-round/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/zsagasport/zssport-round/master/LICENSE)

## Demo
https://zsagasport.github.io/zssport-round/demo/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#licence)

## About



## Installation

Install through npm:
```
npm install --save zssport-round
```

Then use it in your app like so:

```typescript
import {Component} from '@angular/core';
import {RoundComponent} from 'zssport-round';

@Component({
  selector: 'demo-app',
  directives: [RoundComponent],
  template: '<zssport-round></zssport-round>'
})
export class DemoApp {}
```

You may also find it useful to view the [demo source](https://github.com/zsagasport/zssport-round/blob/master/demo/demo.ts).

### Usage without a module bundler
```
<script src="node_modules/dist/umd/zssport-round/zssport-round.js"></script>
<script>
    // everything is exported zssportRound namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via typedoc and can be viewed here:
https://zsagasport.github.io/zssport-round/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
