let parsed = "";

const args = process.argv.slice(2);
console.log("FROM TRANSFORMER", args, typeof args);
const arr = JSON.parse([args[0]]);
console.log("FROM TRANSFORMER", arr, typeof arr);

const parse = (arr, count) => {
  if (
    arr === undefined ||
    arr === null ||
    arr.length == 0 ||
    typeof arr !== "object"
  ) {
    return;
  }
  for (objectK of Object.entries(arr)) {
    if (typeof objectK[1] == "object") {
      if (!isNaN(objectK[0])) {
        parse(objectK[1], count);
      } else {
        parsed += "\t".repeat(count) + objectK[0] + "\n";
        parse(objectK[1], count + 1);
      }
    } else {
      parsed += "\t".repeat(count) + objectK + "\n";
    }
  }
};

parse(arr, 0);
console.log("##", JSON.stringify(parsed), "##");
