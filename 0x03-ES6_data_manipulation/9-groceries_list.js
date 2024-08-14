/**
 * Returns a map of groceries with name and quantity
 */

export default function groceriesList() {
  const grocery = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  return new Map(grocery);
}
