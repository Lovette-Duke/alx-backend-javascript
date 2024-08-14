/**
 * Returns a new ArrayBuffer with an Int8 at a specified position
 */

export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const uint8 = new Int8Array(buffer, 0, length);
  uint8.set([value], position);
  return new DataView(buffer);
}
