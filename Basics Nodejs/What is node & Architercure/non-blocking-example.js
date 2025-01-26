const fs = require('fs');

console.log(1);

fs.readFile('./context.txt', 'utf-8', (err, res) => {
    if (err) {
        console.error("Error reading file:", err.message);
    } else {
        console.log(res); // Outputs the file contents as a string
    }
});

console.log(2);
;