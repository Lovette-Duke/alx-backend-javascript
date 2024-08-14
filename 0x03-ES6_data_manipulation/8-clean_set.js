/**
 * Returns a string of all the set values that start with a specified string
 */

export default function cleanSet(set, startString) {
  const starts = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const subStr = value.substring(startString.length);

      if (subStr && subStr !== value) {
        starts.push(subStr);
      }
    }
  }
  return starts.join('-');
}
