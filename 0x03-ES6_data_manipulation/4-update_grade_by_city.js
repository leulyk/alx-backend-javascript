export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map(
    (student) => {
      const temp = student;
      for (const current in newGrades) {
        if (Object.prototype.hasOwnProperty.call(newGrades, current)) {
          const newGrade = newGrades[current];
          if (newGrade.studentId === student.id) {
            temp.grade = newGrade.grade;
            return temp;
          }
        }
      }
      temp.grade = 'N/A';
      return temp;
    },
  );
}
