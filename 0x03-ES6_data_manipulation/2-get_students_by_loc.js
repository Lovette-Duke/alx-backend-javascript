/**
 * Returns the array of objecs who a in a specified city
 */

export default function getStudentsByLocation(students, city) {
	if (students instanceof Array) {
		return students.filter((student) => student.location === city);
	}
	return [];
}
