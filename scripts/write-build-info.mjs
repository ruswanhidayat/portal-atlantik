import fs from "node:fs";
import path from "node:path";

const outputPath = path.join(
  process.cwd(),
  "data",
  "build-info.json"
);

const buildInfo = {
  builtAt: new Date().toISOString(),
};

fs.writeFileSync(
  outputPath,
  JSON.stringify(buildInfo, null, 2)
);

console.log(
  `Build timestamp generated: ${buildInfo.builtAt}`
);