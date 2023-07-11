#! /usr/bin/env node

import { Command } from "commander";
import chalk from "chalk";
import { getPackageInfo } from "./utils/getPackageInfo";

const program = new Command();

const nodeVersion = process.version;
const nodeMajorVersion = Number(nodeVersion.split(".")[0].replace("v", ""));

if (nodeMajorVersion < 18) {
  console.log(
    chalk.red(
      `You are running Node ${nodeVersion}.\n` +
        `Create React App requires Node 18 or higher. \n` +
        `Please update your version of Node.`
    )
  );
  process.exit(1);
}

const packageInfo = getPackageInfo();

program
  .name(packageInfo.name)
  .description(packageInfo.description)
  .version(packageInfo.version, "-v, --version", "output the current version");

program.parse();
