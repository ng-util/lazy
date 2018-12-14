# nu-lazy
---

Lazy load resources for Angular

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]

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
| `load(paths: string | string[])` | `Promise<LazyResult[]>` | Load the specified resources, includes `.js`, `.css` |
| `loadScript(path: string, innerContent?: string)` | `Promise<LazyResult>` | Load a script resources |
| `loadStyle(path: string, rel: string = 'stylesheet', innerContent?: string)` | `Promise<LazyResult>` | Load a style resources |

## License

nu-lazy is released under the MIT license.
