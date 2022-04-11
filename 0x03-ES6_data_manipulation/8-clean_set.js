export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const arr = [];
  for (const item of set) {
    if (item.startsWith(startString)) {
      arr.push(item.substr(startString.length));
    }
  }
  return arr.join('-');
}
