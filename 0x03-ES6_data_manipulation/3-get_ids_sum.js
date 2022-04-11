export default function getStudentIdsSum(students) {
  return students.reduce((firstStudent, secondStudent) => firstStudent + secondStudent.id, 0);
}
