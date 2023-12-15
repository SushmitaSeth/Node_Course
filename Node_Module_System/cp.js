// Child process is a node module used to create sub process within a Script
// Sub process means performing different operations like opening calculator etc.
const cp=require('child_process');
// cp.execSync('calc');
// cp.execSync('start chrome');
console.log('output: '+cp.execSync('node demo.js'));