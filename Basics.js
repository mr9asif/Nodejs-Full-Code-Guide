//********************* What is Node.js? *********

// Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside of the browser. It is built on Google Chrome's V8 JavaScript engine and is designed to build scalable, high-performance applications, especially server-side applications.

// Key Features:
// Asynchronous and Non-blocking I/O: Node.js can handle multiple requests at the same time without waiting for one to finish, making it highly efficient.
// Single-threaded Event Loop: Node.js uses a single thread to handle all requests, which is lightweight and resource-efficient.
// Cross-platform: It runs on Windows, macOS, and Linux.


// ***********Node.js Architecture **********

// Node.js follows a single-threaded, event-driven architecture, which allows it to handle many concurrent requests efficiently. Here's how its architecture works:

// 1. Event Loop
// The event loop is the core of Node.js. It continuously listens for events and processes them. Here's how it works:

// Node.js places incoming tasks (e.g., I/O operations) into an event queue.
// The event loop picks up tasks from the queue and processes them.
// If a task is blocking, it delegates the task to worker threads or external resources and keeps listening for other tasks.
// 2. Non-blocking I/O
// Instead of waiting for an I/O operation (e.g., file read/write or database query) to complete, Node.js continues to process other tasks. This is achieved through callbacks, promises, or async/await.

// 3. Components of Node.js Architecture:
// V8 Engine: Compiles and executes JavaScript code.
// Event Loop: Handles all incoming requests asynchronously.
// Libuv: A library that provides multi-platform support for asynchronous I/O operations like file systems, networking, etc.
// Worker Threads: Used for executing CPU-intensive tasks, offloading work from the main thread.
// Callbacks/Promises: Handle asynchronous tasks.
// Example: How Node.js Handles Requests
// A client sends a request to the server.
// Node.js adds the request to the event queue.
// The event loop processes the request:
// If it's a simple task (e.g., data processing), the event loop completes it.
// If it's a long-running task (e.g., file reading), it delegates it to a worker thread and moves to the next request.
// Once the worker thread completes the task, the result is sent back to the event loop, which responds to the client.

// Architectures********

// Incoming Requests
//        ↓
//   Event Queue → Event Loop
//        ↓            ↓
// Simple Task      Worker Threads (e.g., File I/O)
//        ↓            ↓
// Response      Completes & Sends Result to Event Loop → Response


// real example: Block synchronous works of node js
// const fs = require('fs');

// console.log(1);

// try {
//   // Read the file contents
//   const res = fs.readFileSync("./context.txt", 'utf-8'); // Use readFileSync for files
//   console.log(res); // Log the file's contents
// } catch (err) {
//   console.error("Error reading file:", err.message);
// }

// console.log(2);

// real example: Non-Blocking, Asynchronous works of node.js 
// const fs = require('fs');

// console.log(1);

// fs.readFile('./context.txt', 'utf-8', (err, res) => {
//     if (err) {
//         console.error("Error reading file:", err.message);
//     } else {
//         console.log(res); // Outputs the file contents as a string
//     }
// });

// console.log(2);
// ;

