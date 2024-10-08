/**
 * Returns an updated map for all items with 1 as their initial quantity
 */

export default function updateUniqueItems(groceries) {
  if (!(groceries instanceof Map)) {
    throw Error('Cannot process');
  }

  groceries.forEach((val, key) => {
    if (val === 1) {
      groceries.set(key, 100);
    }
  });

  return groceries;
}
