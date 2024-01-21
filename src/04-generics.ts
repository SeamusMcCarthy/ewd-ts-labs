import { friends, colleagues } from "./01-basics";
import { Friend, Colleague } from "./myTypes";

function findMatch<T>(data: T[], criteria: (d: T) => boolean): T | undefined {
  return data.find(criteria);
}

console.log(
  "Jane ",
  findMatch<Friend>(friends, (f) => f.name.startsWith("Jane"))
);
console.log(
  "Finance ",
  findMatch<Colleague>(colleagues.current, (c) => c.department === "Finance")
);

function sort<T>(data: T[], field: (d1: T, d2: T) => number): T[] {
  return data.sort(field);
}

console.log(
  "Sort Friend ",
  sort<Friend>(friends, (a, b) => a.age - b.age)
);
// Sort colleagues by extension number
console.log(
  "Sort Colleague ",
  sort<Colleague>(
    colleagues.current,
    (a, b) => a.contact.extension - b.contact.extension
  )
);
