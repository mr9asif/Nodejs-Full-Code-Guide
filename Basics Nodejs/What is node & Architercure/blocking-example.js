const fs = require('fs');

console.log(1);

try {
  // Read the file contents
  const res = fs.readFileSync("./context.txt", 'utf-8'); // Use readFileSync for files
  console.log(res); // Log the file's contents
} catch (err) {
  console.error("Error reading file:", err.message);
}

console.log(2);