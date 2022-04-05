export default function appendToEachArrayValue(array, appendString) {
  const temp = array;
  for (const idx of array.keys()) {
    const value = array[idx];
    temp[idx] = appendString + value;
  }

  return temp;
}
