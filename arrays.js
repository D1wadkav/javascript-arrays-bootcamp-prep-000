var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(a, b) {
  c = ["b", ...a]
  return c
}

function destructivelyAddElementToBeginningOfArray(a, b) {
  return a.push("b")
}

function addElementToEndOfArray(a, b) {
  c = [...a, "b"]
  return c
}

function destructivelyAddElementToEndOfArray(a, b) {
  return a.unshift("b")
}

function accessElementInArray(a, b) {
  return console.log(a[b]);
}