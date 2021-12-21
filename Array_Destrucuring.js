let arr = ["Jhon", "Abhramham"];
let [first, last] = arr;
console.log(`FirstName is ${first} and lastname is ${last}`);
// --------------------------------------
let user = {
  namee: "Jhon",
  age: 30,
};

for (let [key, value] of Object.entries(user)) {
  console.log(`key is ${key} and value is ${value}`);
}
// ----------------------------------------------

let options2 = {
  title2: "My menu",
  items: ["Item1", "Item2"],
};

function showmenu({
  title2 = "Untiltled",
  width = 100,
  height = 200,
  items = [],
}) {
  console.log(`${title2} ${width} ${height}`);
  console.log(items);
}

showmenu(options2);
