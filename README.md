# tsclass
common classes for TypeScript.

## Usage
tsclass exposes many commonly used objects as classes to inherit (-> extends keyword) from for individual implementations.
They come complete with best in class intellisense and are easy to require.

```javascript
import { TscInvoice } from 'tsclass/dist/invoice'

class myOwnInvoice extends TscInvoice {
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
