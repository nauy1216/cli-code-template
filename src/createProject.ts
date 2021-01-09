import path from "path";
import fs from "fs-extra";
import inquirer from "inquirer";

async function create(projectName: string, options: any) {
  const cwd = options.cwd || process.cwd();
  const inCurrent = projectName === ".";
  const name = inCurrent ? path.relative("../", cwd) : projectName;
  const targetDir = path.resolve(cwd, projectName || ".");

  if (fs.existsSync(targetDir)) {
    console.log(`文件${targetDir}已存在`);
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

  inquirer.prompt(promptList).then(answer => {
    console.log(answer);
  });
}

export default (projectName: string, options: any) => {
  return create(projectName, options).catch(() => {
    process.exit(1);
  });
};
