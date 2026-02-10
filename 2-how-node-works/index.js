const os = require("os");
const fs = require("fs");

const filename = "cpus.txt";

try {
  if (fs.existsSync) {
    const data = await fs.promises.readFile(filename);
     console.log(data)
  } else {
    fs.writeFile(filename, JSON.stringify(os.cpus()), (err) => {
      if (err) {
        console.log(error);
      } else {
        console.log("done");
      }
    });
  }
} catch (error) {}
