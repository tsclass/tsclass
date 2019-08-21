# @tsclass/tsclass
common classes for TypeScript

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@tsclass/tsclass)
* [gitlab.com (source)](https://gitlab.com/tsclass/tsclass)
* [github.com (source mirror)](https://github.com/tsclass/tsclass)
* [docs (typedoc)](https://tsclass.gitlab.io/tsclass/)

## Status for master
[![build status](https://gitlab.com/tsclass/tsclass/badges/master/build.svg)](https://gitlab.com/tsclass/tsclass/commits/master)
[![coverage report](https://gitlab.com/tsclass/tsclass/badges/master/coverage.svg)](https://gitlab.com/tsclass/tsclass/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/@tsclass/tsclass.svg)](https://www.npmjs.com/package/@tsclass/tsclass)
[![Known Vulnerabilities](https://snyk.io/test/npm/@tsclass/tsclass/badge.svg)](https://snyk.io/test/npm/@tsclass/tsclass)
[![TypeScript](https://img.shields.io/badge/TypeScript->=%203.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://prettier.io/)

## Usage

Use TypeScript for best in class instellisense.

tsclass exposes many commonly used objects as interface to implement (-> extends keyword) by individual implementations.
They come complete with best in class intellisense and are easy to require.

```javascript
import { IInvoice } from 'tsclass';

class myOwnInvoice implements IInvoice {
  constructor() {
    super(); // you need to call super() in the constructor
  }
}
```

### Time/Date

- Date
- Time

### Publications/Websites/Blogs

- Article
- Author

### Finance

- Invoice

> The modules in bold letters exist as own modules and can be used seperately

For further information read the linked docs at the top of this README.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
> | By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy.html)

[![repo-footer](https://tsclass.gitlab.io/assets/repo-footer.svg)](https://push.rocks)

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy)

[![repo-footer](https://lossless.gitlab.io/publicrelations/repofooter.svg)](https://maintainedby.lossless.com)
