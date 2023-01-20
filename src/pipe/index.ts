import fs from "fs";

const readStream = fs.createReadStream("./package.json");

const writeStream = fs.createWriteStream("./whoopsie/package.json");

readStream.pipe(writeStream);

writeStream.on("error", (err) => {
  console.log("readStream.readable", readStream.readable);
  console.log("readStream.destroyed", readStream.destroyed);

  console.log("writeStream.writable", writeStream.writable);
  console.log("writeStream.destroyed", writeStream.destroyed);
});
