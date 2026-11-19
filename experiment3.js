
const fs = require('fs');


fs.writeFileSync('student.txt', 'Hello, I am a BTech student.');

console.log("File created successfully!");


const data = fs.readFileSync('student.txt', 'utf8');

console.log("File Content:", data);

fs.appendFileSync('student.txt', '\nI am learning Node.js.');

console.log("File updated successfully!");


const updatedData = fs.readFileSync('student.txt', 'utf8');

console.log("Updated Content:", updatedData);

    
fs.unlinkSync('student.txt');

console.log("File deleted successfully!");