/**
 * Returns a boolean if all elements in an array is in a specified set
 */

export default function hasValuesFromArray(set, array) {
	return array.every((element) => set.has(element));
}
