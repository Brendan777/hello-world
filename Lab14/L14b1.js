const fs = require('fs');

let filename = __dirname + '/user_data.json'; 

if (fs.existsSync(filename)) { // Removed 'utf-8' from fs.existsSync
    let data = fs.readFileSync(filename, 'utf-8');

    let user_reg_data = JSON.parse(data);

    console.log(user_reg_data);
} else {
    console.log(`the file name ${filename} does not exist.`);
}
