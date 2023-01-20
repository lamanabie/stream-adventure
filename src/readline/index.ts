import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", (line) => {
  console.log("rl.on.line: ", line);
});

rl.once("close", () => {
  console.log("rl.once.close");
});
