# tsclass

common classes for TypeScript

## Availabililty

[![npm](https://tsclass.gitlab.io/assets/repo-button-npm.svg)](https://www.npmjs.com/package/tsclass)
[![git](https://tsclass.gitlab.io/assets/repo-button-git.svg)](https://GitLab.com/tsclass/tsclass)
[![git](https://tsclass.gitlab.io/assets/repo-button-mirror.svg)](https://github.com/tsclass/tsclass)
[![docs](https://tsclass.gitlab.io/assets/repo-button-docs.svg)](https://tsclass.gitlab.io/tsclass/)

## Status for master

[![build status](https://GitLab.com/tsclass/tsclass/badges/master/build.svg)](https://GitLab.com/tsclass/tsclass/commits/master)
[![coverage report](https://GitLab.com/tsclass/tsclass/badges/master/coverage.svg)](https://GitLab.com/tsclass/tsclass/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/tsclass.svg)](https://www.npmjs.com/package/tsclass)
[![Dependency Status](https://david-dm.org/tsclass/tsclass.svg)](https://david-dm.org/tsclass/tsclass)
[![bitHound Dependencies](https://www.bithound.io/github/tsclass/tsclass/badges/dependencies.svg)](https://www.bithound.io/github/tsclass/tsclass/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/tsclass/tsclass/badges/code.svg)](https://www.bithound.io/github/tsclass/tsclass)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

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
