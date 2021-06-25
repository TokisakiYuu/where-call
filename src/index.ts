import StackUtils from "stack-utils";

const utils = new StackUtils({cwd: process? process.cwd() : ".", internals: StackUtils.nodeInternals()});

export function whereIsCallFunction() {
  const cleaned = utils.clean((new Error()).stack as string);
  const location = utils.parseLine(cleaned.split("\n")[2]);
  if(!location) return null;
  return {
    line: location.line,
    column: location.column,
    file: location.file
  };
}

export function whereIsHere() {
  const cleaned = utils.clean((new Error()).stack as string);
  const location = utils.parseLine(cleaned.split("\n")[1]);
  if(!location) return null;
  return {
    line: location.line,
    column: location.column,
    file: location.file
  };
}
