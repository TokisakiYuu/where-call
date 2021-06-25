const loc = require("./dist/index");

function foo() {
  const location = loc.whereIsCallFunction();
  console.log(`where is call function? : (${location.file}:${location.line}:${location.column})`);
  const local = loc.whereIsHere();
  console.log(`where is here? : (${local.file}:${local.line}:${local.column})`);

  console.log("\nif you click link to the right place, then test passed");
}

foo();