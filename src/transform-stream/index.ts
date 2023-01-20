import { Transform } from "stream";

const removeSpaces = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, String(chunk).replace(/ /g, ""));
  },
});
