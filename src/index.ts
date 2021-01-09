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
    .action((entry, cmd) => {
      build(entry);
    });

  commander.parse(process.argv);
}
