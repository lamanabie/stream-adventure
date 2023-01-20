import { once } from "events";
import net from "net";

// server 1
const server = net.createServer();

server.listen(3000);

await once(server, "listening");

console.log("server listening", server.address());

// server 2
/*
const server2 = net.createServer();

server2.listen(3000);

try {
  await once(server2, "listening");
} catch (err) {
  console.error("cannot start server2", err);
}
*/
