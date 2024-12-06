# Unhandled Promise Rejection in Node.js Async File I/O

This example demonstrates a common issue in Node.js asynchronous programming: unhandled promise rejections.  Improper error handling in asynchronous file I/O can lead to unexpected behavior. The `bug.js` file shows the problematic code, while `bugSolution.js` provides the corrected version.

## Bug

The `bug.js` file attempts to read a file asynchronously using `fs.promises.readFile`. However, it doesn't properly handle the case where the file doesn't exist.  This results in an unhandled promise rejection, which is often silent but can bring down your application. 

## Solution

The `bugSolution.js` file shows how to correctly handle potential errors using a `try...catch` block. By catching the error and explicitly handling `ENOENT` (file not found) or other errors, we prevent unhandled rejections and make the application more robust.