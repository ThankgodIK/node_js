import fs from "fs";

// Define the file name and the content to be written to the file
const fileName = "welcome.txt";
const fileContent = "hello node";

// Use fs.writeFile to create the file and write the content
fs.writeFile(fileName, fileContent, (err) => {
  if (err) {
    // Log an error message if there's an error during the file creation
    console.error("Error writing to file:", err);
  } else {
    // Log a success message if the file is created and written successfully
    console.log("File created successfully with content:", fileContent);
  }
});

// to read file
fs.readFile("./hello.txt", "utf8", (err, data) => {
  if (err) {
    // Log an error message if there's an error during the file reading
    console.error("Error reading the file:", err);
  } else {
    // Log the content of the file to the console
    console.log("File content:", data);
  }
});
