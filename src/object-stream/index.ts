import { Readable } from "stream";

const stream = new Readable({ objectMode: true, read: () => {} });

stream.push({ a: "a" });
stream.push({ b: "b" });
stream.push({ c: "c" });

stream.on("data", (chunk) => {
  console.log("chunk", chunk);
});
