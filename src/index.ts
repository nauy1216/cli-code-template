// import inquirer from "inquirer";

// const promptList = [
//   {
//     type: "checkbox",
//     message: "选择项目模板",
//     name: "template",
//     choices: [
//       {
//         title: "a"
//       }
//     ]
//   }
// ];

// export default function start() {
//   inquirer.prompt(promptList).then(() => {});
// }

import commander from "commander";
import createProject from "./createProject";

export default function start() {
  commander
    .command("create <app-name>")
    .description("create a new project")
    .action((name, cmd) => {
      createProject(name, {});
    });
  commander.parse(process.argv);
}
