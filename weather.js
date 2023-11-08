#!/user/bin/env node
import { getArgs } from "./helpers/args.js";

const initCLI = () => {
  const args = getArgs(process.argv);
  console.log(args);
  if (args.h) {
    // output help
  }
  if (args.s) {
    //save city
  }
  if (args.t) {
    //save token
  }

  // output weather
};

initCLI();