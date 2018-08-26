var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(a, b) {
  return a.push("b")
}

function destructivelyAddElementToBeginningOfArray(a, b) {
  a = ["b", ...a]
  return a
}

addElementToEndOfArray
