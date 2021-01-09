import path from "path";
import fs from "fs-extra";
import inquirer from "inquirer";
// import download from "download-git-repo";
import { spawn } from "child_process";
import Logger from "./utils/logger";

async function create(projectName: string, options: any) {
  const cwd = options.cwd || process.cwd();
  const targetDir = path.resolve(cwd, projectName || ".");

  if (fs.existsSync(targetDir)) {
    Logger.info(`文件${targetDir}已存在`);
    return;
  }

  const promptList = [
    {
      type: "list",
      message: "选择项目模板",
      name: "template",
      choices: [
        {
          name: "template-vue-typescript"
        },
        {
          name: "template-vue-ts-option"
        },
        {
          name: "template-react-ts"
        },
        {
          name: "template-uniapp-ts"
        }
      ]
    }
  ];
  const { template } = await inquirer.prompt(promptList);

  await new Promise((resolve, reject) => {
    const download = spawn(`git`, [`clone`, `https://github.com/nauy1216/${template}.git`, `./${projectName}`]);

    download.stdout.on("data", function (data) {
      Logger.info("stdout: " + data);
    });

    download.stderr.on("data", function (data) {
      Logger.info("stderr: " + data);
    });
  });
}

export default (projectName: string, options: any) => {
  return create(projectName, options).catch(() => {
    process.exit(1);
  });
};
