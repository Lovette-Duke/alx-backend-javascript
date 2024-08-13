/**
 * Returns an array of ids from a list of object
 */

export default function getListStudentIds(students) {
	if (studens instanceof Array)) {
		return students.map((student) => student.id);
	}
	return [];
}
