import { Friend, Colleague } from "./myTypes";
import { friends, colleagues } from "./01-basics";

function older(f: Friend): string {
  f.age += 1;
  return `${f.name} is now ${f.age}`;
}

console.log(older(friends[0]));

function allOlder(all: Friend[]): string[] {
  let results: string[] = [];
  all.forEach((friend) => {
    friend.age += 1;
    results.push(`${friend.name} is now ${friend.age}`);
  });
  return results;
}

console.log(allOlder(friends));

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));

function addColleague(
  existing: Colleague[],
  name: string,
  department: string,
  email: string
) {
  const newExt: number = highestExtension(existing).contact.extension + 1;
  existing.push({ name, department, contact: { email, extension: newExt } });
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
