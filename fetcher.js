const request = require('request');
const fs = require('fs');

request('http://www.example.edu', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  const filePath = './index.html'; //where to write (path)
  const maxAmountOfCharacter = 3262; //the maximum value of the imported file
  const constenToWrite = body.slice(0, maxAmountOfCharacter); //file to write with required number of characteers 

  fs.writeFile(filePath, constenToWrite, (err) => { //write to the file
    if (err) {
      console.error('Error writing to the file:', err);
    } else {
      console.log('Downloaded and saved 3262 bytes to ' + filePath);
    }
  });
})
