import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

for await (const line of rl) {
  console.log("for await: ", line);
}

console.log("close");
