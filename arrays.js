var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(a, b) {
  return [b, ...a]
}

function destructivelyAddElementToBeginningOfArray(a, b) {
  a.unshift(b);
  return a
}

function addElementToEndOfArray(a, b) {
  c = [...a, b]
  return c
}

function destructivelyAddElementToEndOfArray(a, b) {
  a.push(b);
  return a
}

function accessElementInArray(a, b) {
  console.log(a[b]);
}

function destructivelyRemoveElementFromBeginningOfArray(a) {
  a.shift()
  console.log(a);
}

function removeElementFromBeginningOfArray(a) {
  return a.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(a) {
  a.pop()
  console.log(a);
}

function removeElementFromEndOfArray() {
  return a.slice(0, a.length -1)
}