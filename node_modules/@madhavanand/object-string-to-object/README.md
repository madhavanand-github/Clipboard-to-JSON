# JS Object String to JS Object
A npm package that converts/parses the JavaScript Object in String Type to JavaScript Object.  

**Input** : `JavaScript Object as String Type`  
**Output** : `JavaScript Object`

# The Problem
<img width="566" alt="image" src="https://github.com/madhavanand-github/jsObjectString-to-jsObject/assets/57529334/39cdd01a-9565-4538-bb90-d9042e6218fb">

# Example

### Object Strings Failed to parse
``` js
const objString = "{ url : 'http://google.com' }"
const objString = "{ 'url' : 'http://google.com' }"
```

<img width="632" alt="image" src="https://github.com/madhavanand-github/jsObjectString-to-jsObject/assets/57529334/98cc2b44-a760-4220-8bcc-fdc16127da44">

# How to use
``` js

// Import
const customParser = require('object-string-to-object')  

// Test String
const objString = '{ url : "http://google.com" }';  

// Output
const result = customParser(objString);  

```

> For a correct input, output is 100% correct.  
> For an incorrect input, you may get an undesired output/error.  
> For an Error, `null` is returned.
