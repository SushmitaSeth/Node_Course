const path=require('path');

let ext=path.extname('C:\\Users\\Moumita\\OneDrive\\Documents\\NodeCourse\\Node_Module_System\\f1.txt')
let basename=path.basename('C:\\Users\\Moumita\\OneDrive\\Documents\\NodeCourse\\Node_Module_System\\f1.txt')

console.log(ext);
console.log(basename);
console.log(__filename);
console.log(__dirname);