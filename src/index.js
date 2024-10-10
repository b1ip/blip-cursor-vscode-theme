const fs = require("fs").promises;
const getTheme = require("./theme");

const blipTheme = getTheme({
  theme: "blip",
  name: "Blip Theme",
});

// Write theme
fs.mkdir("./themes", { recursive: true })
  .then(() => Promise.all([
    fs.writeFile("./themes/blip-theme.json", JSON.stringify(blipTheme, null, 2)),
  ]))
  .catch(() => process.exit(1))