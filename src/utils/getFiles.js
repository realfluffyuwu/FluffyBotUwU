//require('dotenv').config();
const fs = require('fs');
const path = require('path')


module.exports = (directory, foldersOnly = false) => {
    let fileNames = [];

    const files = fs.readdirSync(directory, { withFileTypes: true});

    for (const file of files) {
        const filePath = path.join(directory, file.name);

        if (foldersOnly) {
            if (file.isDirectory()) {
                fileNames.push(filePath);
            }
        } else {
            if (file.isFile()) {
                fileNames.push(filePath);
            }
        }
    }

    return fileNames;
}



// const files = fs.readdirSync("..", {
//     withFileTypes: true,
//     recursive: true,
// });

// const commandFiles = [];

// for (const file of files) {
//     if (file.isFile()) {
//         commandFiles.push(`${file.path}\\${file.name}`)
//     }
// }

// console.log(commandFiles);