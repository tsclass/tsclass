# @tsclass/tsclass
common classes for TypeScript

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@tsclass/tsclass)
* [gitlab.com (source)](https://gitlab.com/tsclass/tsclass)
* [github.com (source mirror)](https://github.com/tsclass/tsclass)
* [docs (typedoc)](https://tsclass.gitlab.io/tsclass/)

## Status for master

Status Category | Status Badge
-- | --
GitLab Pipelines | [![pipeline status](https://gitlab.com/tsclass/tsclass/badges/master/pipeline.svg)](https://lossless.cloud)
GitLab Pipline Test Coverage | [![coverage report](https://gitlab.com/tsclass/tsclass/badges/master/coverage.svg)](https://lossless.cloud)
npm | [![npm downloads per month](https://badgen.net/npm/dy/@tsclass/tsclass)](https://lossless.cloud)
Snyk | [![Known Vulnerabilities](https://badgen.net/snyk/tsclass/tsclass)](https://lossless.cloud)
TypeScript Support | [![TypeScript](https://badgen.net/badge/TypeScript/>=%203.x/blue?icon=typescript)](https://lossless.cloud)
node Support | [![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
Code Style | [![Code Style](https://badgen.net/badge/style/prettier/purple)](https://lossless.cloud)
PackagePhobia (total standalone install weight) | [![PackagePhobia](https://badgen.net/packagephobia/install/@tsclass/tsclass)](https://lossless.cloud)
PackagePhobia (package size on registry) | [![PackagePhobia](https://badgen.net/packagephobia/publish/@tsclass/tsclass)](https://lossless.cloud)
BundlePhobia (total size when bundled) | [![BundlePhobia](https://badgen.net/bundlephobia/minzip/@tsclass/tsclass)](https://lossless.cloud)
Platform support | [![Supports Windows 10](https://badgen.net/badge/supports%20Windows%2010/yes/green?icon=windows)](https://lossless.cloud) [![Supports Mac OS X](https://badgen.net/badge/supports%20Mac%20OS%20X/yes/green?icon=apple)](https://lossless.cloud)

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

## Contribution

We are always happy for code contributions. If you are not the code contributing type that is ok. Still, maintaining Open Source repositories takes considerable time and thought. If you like the quality of what we do and our modules are useful to you we would appreciate a little monthly contribution: You can [contribute one time](https://lossless.link/contribute-onetime) or [contribute monthly](https://lossless.link/contribute). :)

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy)

[![repo-footer](https://lossless.gitlab.io/publicrelations/repofooter.svg)](https://maintainedby.lossless.com)
