/**
 * Returns the array of objecs who a in a specified city
 */

export default function getStudentsByLocation(students, city) {
	if (Array.isArray(students)) {
		return students.filter(items) => items.location === city);
	}
	return [];
}
