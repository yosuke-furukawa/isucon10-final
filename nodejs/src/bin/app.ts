import { app } from "../app";

import cluster from "cluster";
import os from "os";

const cpuNums = os.cpus().length / 2;

process.on("unhandledRejection", (e) => {
  console.error(e);
  process.exit(1);
});

process.on("uncaughtExcection", (e) => {
  console.error(e);
  process.exit(1);
});

if (cluster.isMaster) {
  cluster.fork();
} else {
  app.listen(process.env.PORT ?? 9292, () => {
    console.log("Listening on 9292");
  });
}
