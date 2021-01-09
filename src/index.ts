import commander from "commander";
import createProject from "./command/create";
import build from "./command/build";

export default function start() {
  commander
    .command("create <app-name>")
    .description("create a new project")
    .action((name, cmd) => {
      createProject(name, {});
    });

  commander
    .command("build <entry>")
    .description("build ")
    .option("-t, --target <target>", "Build target (app | lib | wc | wc-async, default: app)")
    .option("-n, --name <name>", "name for lib or web-component mode (default: entry filename)")
    .option("-d, --dest <dir>", "output directory (default: dist)")
    .action((entry, cmd) => {
      build(entry);
    });

  commander.parse(process.argv);
}
