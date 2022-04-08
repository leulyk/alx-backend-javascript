export default function appendToEachArrayValue(array, appendString) {
  const result = array;
  let idx = 0;
  for (const item of array) {
    const value = item;
    result[idx] = appendString + value;
    idx += 1;
  }

  return result;
}
