export default function cleanSet(set, startString) {
  const arr = [];
  if (startString) {
    for (const item of set) {
      if (item.startsWith(startString) && item !== startString) {
        arr.push(item.substr(startString.length));
      }
    }
  }
  return arr.join('-');
}
