import { app } from "../app";

import cluster from "cluster";
import os from "os";

const cpuNums = os.cpus().length*2;

process.on("unhandledRejection", (e) => {
  console.error(e);
  process.exit(1);
});

process.on("uncaughtExcection", (e) => {
  console.error(e);
  process.exit(1);
});

if (cluster.isMaster) {
  for (let i = 0; i < cpuNums; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  app.listen(process.env.PORT ?? 9292, () => {
    console.log("Listening on 9292");
  });
}
