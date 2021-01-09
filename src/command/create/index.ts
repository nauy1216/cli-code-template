import path from "path";
import fs from "fs-extra";
import inquirer from "inquirer";
import download from "download-git-repo";
// import { spawn } from "child_process";
import Logger from "../../utils/logger";
import Spinner from "../../utils/spinner";

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

  await new Promise<void>((resolve, reject) => {
    Spinner.logWithSpinner("fetch", "正在下载, 请稍等...");
    download(`nauy1216/${template}`, `./${projectName}`, { clone: false }, err => {
      Spinner.stopSpinner(false);
      if (err) return reject(err);
      Logger.info(`下载成功.`);
      resolve();
    });
  });
}

export default (projectName: string, options: any) => {
  return create(projectName, options).catch(() => {
    process.exit(1);
  });
};
