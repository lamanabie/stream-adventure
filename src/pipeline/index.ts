import fs, { read } from "fs";
import { pipeline } from "stream";

const readStream = fs.createReadStream("./package.json");
const writeStream = fs.createWriteStream("./whoopsie/package.json");

pipeline(readStream, writeStream, (err) => {
  if (err) {
    console.log(err);
  }

  console.log("readStream.readable", readStream.readable);
  console.log("readStream.destroyed", readStream.destroyed);
  console.log("writeStream.writable", writeStream.writable);
  console.log("writeStream.destroyed", writeStream.destroyed);
});
