var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(a, b) {
  return [b, ...a]
}

function destructivelyAddElementToBeginningOfArray(a, b) {
  return a.unshift(b);
}

function addElementToEndOfArray(a, b) {
  c = [...a, b]
  return c
}

function destructivelyAddElementToEndOfArray(a, b) {
  return a.push(b);
}

function accessElementInArray(a, b) {
  return console.log(a[b]);
}

function destructivelyRemoveElementFromBeginningOfArray(a) {
  a.shift()
  return console.log(a);
}

function removeElementFromBeginningOfArray(a) {
  return a.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(a) {
  a.pop()
  return console.log(a);
}

function removeElementFromEndOfArray() {
  return a.slice(0, a.length -1)
}