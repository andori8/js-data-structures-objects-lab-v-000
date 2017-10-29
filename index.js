// Write your solution in this file!
const driver = {}

function updatedriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value})
}