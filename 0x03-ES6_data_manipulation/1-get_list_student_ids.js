export default function getListStudentIds(array) {
  if (Array.isArray(array)) {
    return array.map((elem) => elem.id);
  }
  return [];
}
