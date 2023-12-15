const fs=require('fs');

//Files
// let fileContent=fs.readFileSync('f1.txt');
// console.log('The output of f1 is '+fileContent);
// fs.writeFileSync('f2.txt','This is file2');//This overwrites the content of a file.
// fs.appendFileSync('f2.txt',' Updated file2');//This appends to the content of the file.
// fs.unlinkSync('f2.txt');

//Directories
// fs.mkdirSync('myDirctory');
// let folderContent=fs.readdirSync('C:\\Users\\Moumita\\OneDrive\\Documents\\NodeCourse\\Node_Module_System\\myDirctory');
// console.log('Folder Content: ',folderContent);
// let doesExist=fs.existsSync('myDirctory');
// console.log(doesExist);
fs.rmdirSync('myDirctory');