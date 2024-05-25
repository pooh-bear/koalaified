# Koalaified
## A unique friendly name ID generator with Australian animals

## Install
Add to your project:
```js
yarn add koalaified
```  

## Usage

Both CommonJS and ESM bundles are built and available to use.  

### ESM
```js
import { generate } from 'koalaified';
```

### CJS
```js
const { generate } = require('koalaified');
```

### Usage
```js
const friendlyName = generate();
console.log('Generated Friendly Name: ', friendlyName);
```

## API
### generate()
```js
const friendlyName = generate({
    adjectiveCount: 2, // number, default: 1
    seperator: '_', // string, default: -
});
```

## Contributions
This is a quick and dirty project, but feel free to contribute! Just pull a PR upstream and tag @pooh-bear.  

This can generate 120k unique combinations with the default adjective count, but feel free to contribute more animals/adjectives.  

## License
MIT License

Copyright (c) Gabe Palomares

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contact
Gabe PB (github.com/pooh-bear)  
dev@gabe.pw  


## Dedication  
To you cheeky countrypeople back down under.