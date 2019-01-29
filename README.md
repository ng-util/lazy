# nu-lazy
---

Lazy load resources for Angular

[![NPM version](https://img.shields.io/npm/v/nu-lazy.svg?style=flat-square)](https://www.npmjs.com/package/nu-lazy)
[![Build Status](https://img.shields.io/travis/ng-util/lazy/master.svg?style=flat-square)](https://travis-ci.org/ng-util/lazy)
[![Codecov](https://img.shields.io/codecov/c/github/ng-util/lazy.svg?style=flat-square)](https://codecov.io/gh/ng-util/lazy)

## Demo

- [Live Demo](https://cipchk.github.io/nu-lazy/)
- [Stackblitz](https://stackblitz.com/edit/nu-lazy)

## Install

[![nu-lazy](https://nodei.co/npm/nu-lazy.png)](https://npmjs.org/package/nu-lazy)

## Usage

```typescript
import { LazyService } from 'nu-lazy';

export class AppComponent {
  constructor(private srv: LazyService) { }

  async loadBS() {
    const res = await this.srv.load(`https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css`);
    console.log(`bootstrap`, res);
  }
```

## How to use it with:

+ `Stackblitz` sample available [here](https://stackblitz.com/edit/nu-lazy).

## API

| name | type | description |
| ---- | -- | ----------- |
| `events` | `Observable<LazyResult[]>` | Events change callback |
| `clear()` | `void` | Clean all cached items |
| `load(paths: string ｜ string[])` | `Promise<LazyResult[]>` | Load the specified resources, includes `.js`, `.css` |
| `loadScript(path: string)` | `Promise<LazyResult>` | Load a script resources |
| `loadStyle(path: string)` | `Promise<LazyResult>` | Load a style resources |

## License

nu-lazy is released under the MIT license.
