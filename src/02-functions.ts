import { Friend, Colleague, EmailContact } from "./myTypes";
import { friends, colleagues } from "./01-basics";

function older(f: Friend): string {
  f.age += 1;
  return `${f.name} is now ${f.age}`;
}

// console.log(older(friends[0]));

function allOlder(all: Friend[]): string[] {
  let results: string[] = [];
  all.forEach((friend) => {
    friend.age += 1;
    results.push(`${friend.name} is now ${friend.age}`);
  });
  return results;
}

// console.log(allOlder(friends));

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

function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number,
  max?: number
): EmailContact[] {
  // Change to handle optional parameter
  let end = colleagues.length;
  if (max !== undefined) {
    end = max < 2 ? 1 : max;
  }
  const sorted = colleagues.sort(sorter); // Colleague[] inferred
  const result: EmailContact[] = sorted.map((ce) => ({
    name: ce.name,
    email: ce.contact.email,
  }));
  return result.slice(0, end);
}

console.log(
  sortColleagues(
    colleagues.current,
    (a, b) => a.contact.extension - b.contact.extension,
    3
  )
);
console.log(
  sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length, 1)
);
console.log(
  sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length)
);

function findFriends(
  friends: Friend[],
  sorter: (friend: Friend) => boolean
): string[] {
  const filtered: Friend[] = friends.filter(sorter);
  const result: string[] = filtered.map((fr) => fr.name);
  return result;
}

// console.log(findFriends(friends, (friend) => friend.name.startsWith("Pa")));
// console.log(findFriends(friends, (friend) => friend.age < 35));

function addInterest(friend: Friend, interest: string) {
  if (friend.interests === undefined) {
    friend.interests = [];
  }
  friend.interests.push(interest);
  return friend.interests;
}

console.log(addInterest(friends[0], "Music"));
console.log(addInterest(friends[0], "Politics"));
