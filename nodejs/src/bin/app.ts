import { app } from "../app";

import cluster from "cluster";
import os from "os";
import * as pprof from "pprof";
import fs from "fs";

const cpuNums = os.cpus().length;

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
  
  app.listen(process.env.PORT ?? 9292, async () => {
    console.log("Listening on 9292");
    const timeProfile = await pprof.time.profile({
      durationMillis: 120000,    // time in milliseconds for which to 
    });
    const buf = await pprof.encode(timeProfile);
    await fs.promises.writeFile(`wall-${process.pid}.pb.gz`, buf);
  });
}
