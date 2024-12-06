```javascript
const fs = require('fs');

async function processFile(filePath) {
  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    // Process data
    console.log('File content:', data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error('File not found:', filePath);
      //Handle file not found, e.g., create file, use a default value etc.
    } else {
      console.error('Error reading file:', err);
    }
  }
}

processFile('./my-file.txt');
```