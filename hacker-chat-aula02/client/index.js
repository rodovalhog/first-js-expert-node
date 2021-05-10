/*
node index.js \
  --username Guilherme \
  --room sala01 \
  --hostUri localhost
*/

import Events from 'events'
import CliConfig from './src/CliConfig.js';
import TerminalController from "./src/terminalController.js";

const componentEmitter = new Events()

const [nodePath, filePath, ...commmands] = process.argv
const config = CliConfig.parseArguments(commmands)
console.log("guiLog -> config", config)

// const controller = new TerminalController();
// await controller.initializeTable(componentEmitter)