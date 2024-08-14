/**
 * Tracks the number of time an api query is made to an endpoint
 */

export const weakMap = new WeakMap();
const ENDPOINT_LOAD = 5;

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= ENDPOINT_LOAD) {
    throw new Error('Endpoint load is high');
  }
}
