const path = require("path");
const chalk = require("chalk");
const shell = require("shelljs");
const inquirer = require("inquirer");
const packageJson = require("../package.json");

console.log(chalk.blackBright.bgYellow(`>>> Cleaning ${packageJson.name}`));

(async () => {
const packName = `${packageJson.name}-${packageJson.version}.tgz`;
  const choices = [
      { name: "build", value: { value: "build" }, checked: true },
      { name: "node_modules", value: { value: "node_modules" }, checked: false },
      { name: "package-lock.json", value: { value: "package-lock.json" }, checked: true },
      { name: packName, value: { value: packName }, checked: true }
    ];
  const prompt = [
    {
      type: "checkbox",
      name: "removeList",
      message: "Select folder to delete",
      choices,
    },
  ];
  const { removeList } =
    process.argv[2] === "alls"
      ? {
          removeList: choices
            .map((item) => {
             return item.value;
            })
            .filter((item) => item),
        }
      : await inquirer.prompt(prompt);

  removeList.map(({ value }) => {
    const rmpath = path.join(path.dirname(__dirname),value);
    console.log(`> rm: ${rmpath}`);
    shell.rm("-rf", rmpath);
  });
  console.log(chalk.white.bgGreen(`>>> Cleanup ${packageJson.name} complete`));
})();
