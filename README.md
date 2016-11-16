# tsclass
common classes for TypeScript.

## Availabililty
[![npm](https://push.rocks/assets/repo-button-npm.svg)](https://www.npmjs.com/package/tsclass)
[![git](https://push.rocks/assets/repo-button-git.svg)](https://gitlab.com/tsclass/tsclass)
[![git](https://push.rocks/assets/repo-button-mirror.svg)](https://github.com/tsclass/tsclass)
[![docs](https://push.rocks/assets/repo-button-docs.svg)](https://tsclass.gitlab.io/tsclass/)

## Status for master
[![build status](https://gitlab.com/tsclass/tsclass/badges/master/build.svg)](https://gitlab.com/tsclass/tsclass/commits/master)
[![coverage report](https://gitlab.com/tsclass/tsclass/badges/master/coverage.svg)](https://gitlab.com/tsclass/tsclass/commits/master)
[![Dependency Status](https://david-dm.org/tsclass/tsclass.svg)](https://david-dm.org/tsclass/tsclass)
[![bitHound Dependencies](https://www.bithound.io/github/tsclass/tsclass/badges/dependencies.svg)](https://www.bithound.io/github/tsclass/tsclass/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/tsclass/tsclass/badges/code.svg)](https://www.bithound.io/github/tsclass/tsclass)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage
tsclass exposes many commonly used objects as interface to implement (-> extends keyword) by individual implementations.
They come complete with best in class intellisense and are easy to require.

```javascript
import { IInvoice } from 'tsclass'

class myOwnInvoice implements IInvoice {
    constructor(){
        super() // you need to call super() in the constructor
    }
}

```

### Time/Date
* Date
* Time

### Publications/Websites/Blogs
* Article
* Author

### Finance
* Invoice


> The modules in bold letters exist as own modules and can be used seperately
