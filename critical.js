const fs = require("fs");
const glob = require("glob");
const critical = require("critical");

process.setMaxListeners(Infinity);

const files = glob.sync("./dist/**/*.html");
files.forEach(async (filePath) => {
  const original = fs.readFileSync(filePath, "utf8");
  const { html } = await critical.generate({
    base: "./dist",
    html: original,
    dimensions: [
      {
        height: 1300,
        width: 900,
      },
      {
        height: 812,
        width: 414,
      },
    ],
    inline: true,
    extract: false,
  });
  fs.writeFileSync(filePath, html, "utf8");
  console.log(`Critical CSS for ${filePath} was inlined`);
});
