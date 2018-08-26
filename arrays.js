var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(a, b) {
  return a.push("b")
}

function destructivelyAddElementToBeginningOfArray(a, b) {
  c = ["b", ...a]
  return c
}

function addElementToEndOfArray(a, b) {
  return a.unshift("b")
}

function destructivelyAddElementToEndOfArray(a, b) {
  c = [...a, "b"]
  return c
}
