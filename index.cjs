var { styleText } = require("node:util");
var console = require("node:console");
var logger = {
  error(main, ...data) {
    console.error(styleText(["bgRed", "black"], main), ...data);
  },
  log(main, ...data) {
    console.log(styleText(["gray"], main), ...data);
  },
  info(main, ...data) {
    console.info(styleText(["bgGreen", "black"], main), ...data);
  },
  warn(main, ...data) {
    console.warn(styleText(["bgYellow", "black"], main), ...data);
  },
  group(label) {
    console.group(styleText(["cyan"], "--- logs " + label + "---"));
  },
  groupEnd() {
    console.groupEnd();
  },
  time(label) {
    console.time(styleText(["magentaBright"], "time " + label));
  },
  timeEnd(label) {
    console.timeEnd(styleText(["magentaBright"], "time " + label));
  },
};
module.exports = { logger };
