export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employees) {
      let count = 0;
      for (const department in employees) {
        if ({}.hasOwnProperty.call(employees, department)) {
          count += 1;
        }
      }
      return count;
    },
  };
}
