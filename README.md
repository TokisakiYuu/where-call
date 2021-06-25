# Where Call

### functions

- **whereIsCallFunction(): Info | null**
```javascript
// source.js
function foo() {
  return whereIsCallFunction();
}
const location = foo();
//       │       ↑
//       └───────┘
//     source.js:4:17
```

- **whereIsHere(): Info | null**
```javascript
// source.js
function foo() {
  const location = whereIsHere();
//         │       ↑
//         └───────┘
//       source.js:2:19
}
foo();
```


### object

- **Info**: location detail
  - line: *number*
  - column: *number*
  - file: *string*



### Related

- [stack-utils](https://github.com/tapjs/stack-utils) cleans stack traces and parse trace info